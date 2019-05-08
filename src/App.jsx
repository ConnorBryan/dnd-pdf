import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import {
  PDFDocumentFactory,
  PDFDocumentWriter,
  StandardFonts,
  drawText
} from "pdf-lib";
import {
  Grid,
  Card,
  Container,
  Divider,
  Segment,
  Header,
  TextArea
} from "semantic-ui-react";

import races from "./data/races";
import backgroundData from "./data/backgrounds";
import itemData from "./data/items";
import sheet from "./sheet.pdf";
import character from "./character";
import format from "./format";
import CharacterForm from "./CharacterForm";
import LoadingScreen from "./LoadingScreen";

const socketUrl =
  process.env.NODE_ENV === "production"
    ? "wss://142.93.30.81:9000"
    : "ws://localhost:9000";
const socket = new WebSocket(socketUrl);

async function getSheet(derp, onFinish) {
  const thing = await fetch(sheet).then(res => res.arrayBuffer());
  const pdfDoc = PDFDocumentFactory.load(new Uint8Array(thing));
  const [helveticaRef, helveticaFont] = pdfDoc.embedStandardFont(
    StandardFonts.Helvetica
  );
  const [statPage, , spellPage] = pdfDoc.getPages();
  const { statPageData, spellPageData } = format(derp);
  const statPageContentStream = pdfDoc.createContentStream(
    ...statPageData.map(field => write(...field))
  );
  const spellPageContentStream = pdfDoc.createContentStream(
    ...spellPageData.map(field => write(...field))
  );

  function write(text, x, y, size) {
    text = String(text);

    return drawText(helveticaFont.encodeText(text), {
      x,
      y,
      size,
      font: "Helvetica",
      colorRgb: [0, 0, 0]
    });
  }

  [statPage, spellPage].forEach(page =>
    page.addFontDictionary("Helvetica", helveticaRef)
  );

  statPage.addContentStreams(pdfDoc.register(statPageContentStream));
  spellPage.addContentStreams(pdfDoc.register(spellPageContentStream));

  onFinish(PDFDocumentWriter.saveToBytes(pdfDoc));
}

function getBackgroundEntries(background) {
  const { background: backgroundList } = backgroundData;
  const entry = backgroundList.find(x => x.name === background);

  if (!entry) {
    throw new Error(`Invalid background: ${background}`);
  }

  const entries = entry.entries.filter(({ name = "" }) =>
    name.includes("Feature")
  );

  return entries.map(x => ({
    header: x.name.replace(/Feature: /g, ""),
    description: x.entries.concat("\n")
  }));
}

function getRaceEntries(race) {
  if (race.split(" ").length > 1) {
    race = race.split(" ")[1];
  }

  const { race: raceList } = races;
  const entry = raceList.find(x => x.name === race);

  if (!entry) {
    throw new Error(`Invalid race: ${race}`);
  }

  return entry.entries.map(entry => ({
    header: entry.name,
    description: entry.entries.concat("\n")
  }));
}

function getItemEntries(character) {
  const lookup = itemData.item.reduce((prev, next) => {
    prev[next.name] = next;
    return prev;
  }, {});

  return character.equipment
    .map(item => {
      const entry = lookup[item.name];

      if (entry && entry.entries) {
        return {
          header: entry.name,
          description: entry.entries
            .map(x => {
              return typeof x === "string"
                ? x
                : x.type === "list"
                ? x.items.concat(<br />)
                : null;
            })
            .filter(Boolean)
            .concat("\n")
        };
      }
    })
    .filter(Boolean);
}

export default function App() {
  const isDM = window.location.search.includes("dm");
  const [game, setGame] = useState(null);
  const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);
  const [modifiedPdf, setModifiedPdf] = useState(null);
  const [showing, setShowing] = useState(true);
  const activeCharacter = game
    ? game.characters[activeCharacterIndex]
    : character;
  let timeout;

  function reload() {
    clearTimeout(timeout);
    setShowing(false);
    timeout = setTimeout(() => setShowing(true), 250);
  }

  function updateGame(newGame) {
    socket.send(
      JSON.stringify({
        type: "UPDATE_GAME",
        payload: newGame
      })
    );
  }

  function updateCharacter(values) {
    const newGame = {
      ...game,
      characters: game.characters.map((char, index) =>
        index === activeCharacterIndex ? values : char
      )
    };

    updateGame(newGame);
  }

  useEffect(() => {
    getSheet(activeCharacter, setModifiedPdf).then(reload);
  }, [activeCharacter, game]);

  useEffect(() => {
    socket.onmessage = ({ data }) => {
      setGame(JSON.parse(data));
      getSheet(activeCharacter, setModifiedPdf).then(reload);
    };

    setTimeout(
      () =>
        socket.send(
          JSON.stringify({
            type: "SEND_GAME"
          })
        ),
      500
    );

    return socket.close;
  }, []);

  if (!game) {
    return <LoadingScreen />;
  }

  // ---
  const raceEntries = getRaceEntries(activeCharacter.basics.race);
  const backgroundEntries = getBackgroundEntries(
    activeCharacter.basics.background
  );
  const itemEntries = getItemEntries(activeCharacter);

  // ---

  return (
    <div className="App">
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={isDM ? 7 : 16} centered>
              {showing && modifiedPdf && (
                <>
                  <Document
                    file={{
                      data: modifiedPdf
                    }}
                    onLoadError={error => {
                      alert(error);
                      alert(JSON.stringify(error));
                    }}
                  >
                    <Page style={{ display: "none" }} pageNumber={1} />
                    <Page pageNumber={3} />
                  </Document>

                  <Container fluid>
                    <Segment className="form">
                      <Header as="h2">
                        Condition: {activeCharacter.condition}
                      </Header>
                      <Divider />
                      <Header as="h2">Notes</Header>
                      <TextArea value={activeCharacter.notes} />
                    </Segment>
                    <Segment>
                      <Header as="h2">
                        Race: {activeCharacter.basics.race}
                      </Header>
                      {raceEntries.map(({ header, description }) => (
                        <Card
                          fluid
                          key={header}
                          header={header}
                          description={description}
                        />
                      ))}
                    </Segment>
                    <Segment>
                      <Header as="h2">
                        Background: {activeCharacter.basics.background}
                      </Header>
                      {backgroundEntries.map(({ header, description }) => (
                        <Card
                          fluid
                          key={header}
                          header={header}
                          description={description}
                        />
                      ))}
                    </Segment>
                    {itemEntries.length > 0 && (
                      <Segment>
                        <Header as="h2">Items</Header>
                        {itemEntries.map(({ header, description }) => (
                          <Card
                            fluid
                            key={header}
                            header={header}
                            description={description}
                          />
                        ))}
                      </Segment>
                    )}
                  </Container>
                </>
              )}
            </Grid.Column>
            {isDM && showing && (
              <Grid.Column width={9}>
                <CharacterForm
                  character={activeCharacter}
                  onSubmit={updateCharacter}
                />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Container>

      <select
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: "3rem"
        }}
        value={activeCharacterIndex}
        onChange={e => setActiveCharacterIndex(Number(e.target.value))}
      >
        {game.characters.map((char, index) => (
          <option key={index} value={index}>
            {char.name}
          </option>
        ))}
      </select>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import {
  PDFDocumentFactory,
  PDFDocumentWriter,
  StandardFonts,
  drawText
} from "pdf-lib";

import sheet from "./sheet.pdf";
import character from "./character";
import format from "./format";
import CharacterForm from "./CharacterForm";

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
    return <p>"Loading..."</p>;
  }

  return (
    <div className="App">
      <select
        value={activeCharacterIndex}
        onChange={e => setActiveCharacterIndex(Number(e.target.value))}
      >
        {game.characters.map((char, index) => (
          <option key={index} value={index}>
            {char.name}
          </option>
        ))}
      </select>
      {showing && modifiedPdf && (
        <Document
          file={{
            data: modifiedPdf
          }}
        >
          <Page pageNumber={1} />
          <Page pageNumber={3} />
        </Document>
      )}
      {isDM && showing && (
        <CharacterForm character={activeCharacter} onSubmit={updateCharacter} />
      )}
    </div>
  );
}

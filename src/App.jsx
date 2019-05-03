import React from "react";
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
  const [activeCharacter, setActiveCharacter] = React.useState(character);
  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [modifiedPdf, setModifiedPdf] = React.useState(null);
  const [showing, setShowing] = React.useState(true);

  let timeout;

  function changeActiveCharacter(values) {
    clearTimeout(timeout);
    setShowing(false);
    setActiveCharacter(values);

    timeout = setTimeout(() => setShowing(true), 250);
  }

  React.useEffect(() => {
    getSheet(activeCharacter, setModifiedPdf);
  }, [activeCharacter]);

  return (
    <div className="App">
      <CharacterForm
        character={activeCharacter}
        onSubmit={values => changeActiveCharacter(values)}
      />
      {showing && modifiedPdf && (
        <Document
          file={{
            data: modifiedPdf
          }}
          onLoadSuccess={({ numPages }) => {
            setNumberOfPages(numPages);
          }}
        >
          <Page pageNumber={1} />
          <Page pageNumber={3} />
        </Document>
      )}
    </div>
  );
}

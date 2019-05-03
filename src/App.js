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

async function getSheet(onFinish) {
  const thing = await fetch(sheet).then(res => res.arrayBuffer());
  const pdfDoc = PDFDocumentFactory.load(new Uint8Array(thing));
  const [helveticaRef, helveticaFont] = pdfDoc.embedStandardFont(
    StandardFonts.Helvetica
  );
  const [statPage, , spellPage] = pdfDoc.getPages();
  const { statPageData, spellPageData } = format(character);
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
  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [modifiedPdf, setModifiedPdf] = React.useState(null);

  React.useEffect(() => {
    getSheet(setModifiedPdf);
  }, []);

  return (
    <div className="App">
      {modifiedPdf && (
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

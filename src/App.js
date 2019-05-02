import React from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

import sheet from "./sheet.pdf";

export default function App() {
  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(0);

  return (
    <div className="App">
      <Document
        file={sheet}
        onLoadSuccess={({ numPages }) => setNumberOfPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {console.log("\n\n\n", "sheet", sheet, "\n\n\n")}
    </div>
  );
}

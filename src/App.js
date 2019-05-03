import React from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import {
  PDFDocumentFactory,
  PDFDocumentWriter,
  StandardFonts,
  drawText
} from "pdf-lib";

import sheet from "./sheet.pdf";

async function getSheet(onFinish) {
  const thing = await fetch(sheet).then(res => res.arrayBuffer());
  const pdfDoc = PDFDocumentFactory.load(new Uint8Array(thing));
  const [helveticaRef, helveticaFont] = pdfDoc.embedStandardFont(
    StandardFonts.Helvetica
  );
  const [statPage, , spellPage] = pdfDoc.getPages();
  const statPageContentStream = pdfDoc.createContentStream(
    // Top
    write("Name", 50, 715, 18),
    write("Rogue 3", 270, 730, 10),
    write("Outlander", 380, 730, 10),
    write("Dan", 480, 730, 10),
    write("Wood Elf", 270, 705, 10),
    write("Neutral", 380, 705, 10),
    write("10,000", 480, 705, 10),

    // Ability Scores
    write("10", 50, 620, 16),
    write("+0", 50, 595, 12),
    write("10", 50, 547, 16),
    write("+0", 50, 522, 12),
    write("10", 50, 474, 16),
    write("+0", 50, 451, 12),
    write("10", 50, 404, 16),
    write("+0", 50, 379, 12),
    write("10", 50, 333, 16),
    write("+0", 50, 307, 12),
    write("10", 50, 262, 16),
    write("+0", 50, 237, 12),

    // Bonuses
    write("Y", 102, 647, 16),
    write("+2", 99, 610, 16),

    // Saving Throws
    write("X", 100, 577, 12),
    write("4", 116, 579, 12),
    write("X", 100, 563, 12),
    write("2", 116, 565, 12),
    write("X", 100, 549, 12),
    write("2", 116, 551, 12),
    write("X", 100, 535, 12),
    write("2", 116, 537, 12),
    write("X", 100, 521, 12),
    write("2", 116, 523, 12),
    write("X", 100, 507, 12),
    write("2", 116, 509, 12),

    // Skills
    write("X", 100, 461, 12),
    write("2", 116, 464, 12),
    write("X", 100, 448, 12),
    write("2", 116, 449, 12),
    write("X", 100, 435, 12),
    write("2", 116, 436, 12),
    write("X", 100, 421, 12),
    write("2", 116, 423, 12),
    write("X", 100, 407, 12),
    write("2", 116, 409, 12),
    write("X", 100, 394, 12),
    write("2", 116, 396, 12),
    write("X", 100, 381, 12),
    write("2", 116, 383, 12),
    write("X", 100, 368, 12),
    write("2", 116, 370, 12),
    write("X", 100, 354, 12),
    write("2", 116, 356, 12),
    write("X", 100, 340, 12),
    write("2", 116, 342, 12),
    write("X", 100, 326, 12),
    write("2", 116, 328, 12),
    write("X", 100, 313, 12),
    write("2", 116, 315, 12),
    write("X", 100, 300, 12),
    write("2", 116, 302, 12),
    write("X", 100, 286, 12),
    write("2", 116, 288, 12),
    write("X", 100, 272, 12),
    write("2", 116, 274, 12),
    write("X", 100, 258, 12),
    write("2", 116, 260, 12),
    write("X", 100, 245, 12),
    write("2", 116, 247, 12),
    write("X", 100, 232, 12),
    write("2", 116, 234, 12),

    // Battle
    write("17", 239, 631, 16),
    write("2", 300, 631, 16),
    write("35", 354, 631, 16),

    // Current Hit Points
    write("30", 300, 587, 12),
    write("30", 300, 561, 16),

    // Temporary Hit Points
    write("0", 300, 508, 16),

    // Hit Dice
    write("3, 1d8", 250, 465, 10),
    write("3", 258, 445, 16),

    // Death Saves
    write("X", 347, 462, 10),
    write("X", 360, 462, 10),
    write("X", 373, 462, 10),
    write("X", 347, 447, 10),
    write("X", 360, 447, 10),
    write("X", 373, 447, 10),

    // Attacks & Spellcasting
    write("Heavy Xbow", 227, 389, 8),
    write("+6", 299, 388, 12),
    write("1d10+2 prc.", 329, 389, 8),
    write("Dagger", 227, 369, 8),
    write("+6", 299, 368, 12),
    write("1d4+2 prc.", 329, 369, 8),
    write("Punch", 227, 349, 8),
    write("+2", 299, 348, 12),
    write("1d4+2 bldg.", 329, 349, 8),
    write("Action Surge", 224, 329, 10),
    write("2/2", 375, 329, 10),

    // Passive Perception
    write("12", 36, 188, 12),

    // Proficiencies
    write("LANGUAGES: Common, Elven", 36, 154, 8),
    write("Draconic", 36, 144, 8),
    write("TOOLS: Thieves Tools, Disguise Kit", 36, 129, 8),
    write("", 36, 119, 8),
    write("INSTRUMENTS: Pan Flute", 36, 104, 8),
    write("", 36, 94, 8),
    write("WEAPONS: Simple, Martial", 36, 79, 8),
    write("", 36, 69, 8),
    write("ARMOR: Light", 36, 54, 8),
    write("", 36, 44, 8),

    // Equipment
    write("200", 234, 102, 12),
    write("Thing x1", 268, 192, 8),
    write("Thing x1", 268, 182, 8),
    write("Thing x1", 268, 172, 8),
    write("Thing x1", 268, 162, 8),
    write("Thing x1", 268, 152, 8),
    write("Thing x1", 268, 142, 8),
    write("Thing x1", 268, 132, 8),
    write("Thing x1", 268, 122, 8),
    write("Thing x1", 268, 112, 8),
    write("Thing x1", 268, 102, 8),
    write("Thing x1", 268, 92, 8),
    write("Thing x1", 268, 82, 8),
    write("Thing x1", 268, 72, 8),
    write("Thing x1", 268, 62, 8),
    write("Thing x1", 268, 52, 8),
    write("Thing x1", 268, 42, 8),

    // Mentality
    write("Egotistical", 420, 631, 10),
    write("Egotistical", 420, 616, 10),
    write("Money", 420, 567, 10),
    write("Money", 420, 552, 10),
    write("Brother", 420, 512, 10),
    write("Brother", 420, 497, 10),
    write("Sucks", 420, 457, 10),
    write("Sucks", 420, 442, 10),

    // Features & Traits
    write("RACE: Example Trait", 412, 399, 8),
    write("RACE: Example Trait", 412, 389, 8),
    write("RACE: Example Trait", 412, 379, 8),
    write("RACE: Example Trait", 412, 369, 8),
    write("RACE: Example Trait", 412, 359, 8),
    write("CLASS: Example Trait", 412, 339, 8),
    write("CLASS: Example Trait", 412, 329, 8),
    write("CLASS: Example Trait", 412, 319, 8),
    write("CLASS: Example Trait", 412, 309, 8),
    write("CLASS: Example Trait", 412, 299, 8),
    write("CLASS: Example Trait", 412, 289, 8),
    write("CLASS: Example Trait", 412, 279, 8),
    write("CLASS: Example Trait", 412, 269, 8),
    write("CLASS: Example Trait", 412, 259, 8),
    write("CLASS: Example Trait", 412, 249, 8),
    write("BACKGROUND: Example Trait", 412, 229, 8),
    write("BACKGROUND: Example Trait", 412, 219, 8),
    write("BACKGROUND: Example Trait", 412, 209, 8),
    write("FEAT: Example Trait", 412, 189, 8),
    write("FEAT: Example Trait", 412, 179, 8),
    write("FEAT: Example Trait", 412, 169, 8),
    write("FEAT: Example Trait", 412, 159, 8),
    write("FEAT: Example Trait", 412, 149, 8),
    write("ITEM: Example Trait", 412, 129, 8),
    write("ITEM: Example Trait", 412, 119, 8),
    write("ITEM: Example Trait", 412, 109, 8),
    write("ITEM: Example Trait", 412, 99, 8),
    write("ITEM: Example Trait", 412, 89, 8)
  );
  const spellPageContentStream = pdfDoc.createContentStream(
    write("Wizard", 50, 712, 18),
    write("INT", 302, 717, 18),
    write("13", 405, 717, 18),
    write("+5", 510, 717, 18),

    // Cantrips
    write("Spell", 36, 610, 8),
    write("Spell", 36, 596, 8),
    write("Spell", 36, 582, 8),
    write("Spell", 36, 568, 8),
    write("Spell", 36, 554, 8),
    write("Spell", 36, 540, 8),
    write("Spell", 36, 526, 8),
    write("Spell", 36, 512, 8),

    // Level 1
    write("4", 66, 463, 14),
    write("0", 146, 463, 14),
    write("X", 31, 435, 12),
    write("Spell", 48, 439, 8),
    write("X", 31, 421, 12),
    write("Spell", 48, 424, 8),
    write("X", 31, 407, 12),
    write("Spell", 48, 410, 8),
    write("X", 31, 393, 12),
    write("Spell", 48, 396, 8),
    write("X", 31, 379, 12),
    write("Spell", 48, 382, 8),
    write("X", 31, 365, 12),
    write("Spell", 48, 368, 8),
    write("X", 31, 351, 12),
    write("Spell", 48, 354, 8),
    write("X", 31, 337, 12),
    write("Spell", 48, 340, 8),
    write("X", 31, 323, 12),
    write("Spell", 48, 326, 8),
    write("X", 31, 309, 12),
    write("Spell", 48, 312, 8),
    write("X", 31, 295, 12),
    write("Spell", 48, 298, 8),
    write("X", 31, 281, 12),
    write("Spell", 48, 284, 8),
    write("X", 31, 267, 12),
    write("Spell", 48, 270, 8),

    // Level 2
    write("2", 66, 234, 14),
    write("0", 146, 234, 14),
    write("X", 31, 208, 12),
    write("Spell", 49, 212, 8),
    write("X", 31, 194, 12),
    write("Spell", 49, 197, 8),
    write("X", 31, 180, 12),
    write("Spell", 49, 183, 8),
    write("X", 31, 166, 12),
    write("Spell", 49, 169, 8),

    // Level 1
    write("4", 66, 463, 14),
    write("0", 146, 463, 14),
    write("X", 31, 435, 12),
    write("Spell", 48, 439, 8),
    write("X", 31, 421, 12),
    write("Spell", 48, 424, 8),
    write("X", 31, 407, 12),
    write("Spell", 48, 410, 8),
    write("X", 31, 393, 12),
    write("Spell", 48, 396, 8),
    write("X", 31, 379, 12),
    write("Spell", 48, 382, 8),
    write("X", 31, 365, 12),
    write("Spell", 48, 368, 8),
    write("X", 31, 351, 12),
    write("Spell", 48, 354, 8),
    write("X", 31, 337, 12),
    write("Spell", 48, 340, 8),
    write("X", 31, 323, 12),
    write("Spell", 48, 326, 8),
    write("X", 31, 309, 12),
    write("Spell", 48, 312, 8),
    write("X", 31, 295, 12),
    write("Spell", 48, 298, 8),
    write("X", 31, 281, 12),
    write("Spell", 48, 284, 8),
    write("X", 31, 267, 12),
    write("Spell", 48, 270, 8),

    // Level 2
    write("2", 66, 234, 14),
    write("0", 146, 234, 14),
    write("X", 31, 208, 12),
    write("Spell", 49, 212, 8),
    write("X", 31, 194, 12),
    write("Spell", 49, 197, 8),
    write("X", 31, 180, 12),
    write("Spell", 49, 183, 8),
    write("X", 31, 166, 12),
    write("Spell", 49, 169, 8),
    write("X", 31, 152, 12),
    write("Spell", 49, 155, 8),
    write("X", 31, 138, 12),
    write("Spell", 49, 141, 8),
    write("X", 31, 124, 12),
    write("Spell", 49, 127, 8),
    write("X", 31, 110, 12),
    write("Spell", 49, 113, 8),
    write("X", 31, 96, 12),
    write("Spell", 49, 99, 8),
    write("X", 31, 82, 12),
    write("Spell", 49, 85, 8),
    write("X", 31, 68, 12),
    write("Spell", 49, 71, 8),
    write("X", 31, 54, 12),
    write("Spell", 49, 57, 8),
    write("X", 31, 40, 12),
    write("Spell", 49, 43, 8),

    // Level 3
    write("0", 256, 630, 14),
    write("0", 330, 630, 14),
    write("X", 220, 605, 12),
    write("Spell", 236, 608, 8),
    write("X", 220, 591, 12),
    write("Spell", 236, 594, 8),
    write("X", 220, 577, 12),
    write("Spell", 236, 580, 8),
    write("X", 220, 563, 12),
    write("Spell", 236, 566, 8),
    write("X", 220, 549, 12),
    write("Spell", 236, 552, 8),
    write("X", 220, 535, 12),
    write("Spell", 236, 538, 8),
    write("X", 220, 521, 12),
    write("Spell", 236, 524, 8),
    write("X", 220, 507, 12),
    write("Spell", 236, 510, 8),
    write("X", 220, 493, 12),
    write("Spell", 236, 496, 8),
    write("X", 220, 479, 12),
    write("Spell", 236, 482, 8),
    write("X", 220, 465, 12),
    write("Spell", 236, 468, 8),
    write("X", 220, 451, 12),
    write("Spell", 236, 454, 8),
    write("X", 220, 437, 12),
    write("Spell", 236, 441, 8),

    // Level 4
    write("0", 256, 405, 14),
    write("0", 330, 405, 14),
    write("X", 220, 380, 12),
    write("Spell", 236, 383, 8),
    write("X", 220, 366, 12),
    write("Spell", 236, 369, 8),
    write("X", 220, 352, 12),
    write("Spell", 236, 355, 8),
    write("X", 220, 338, 12),
    write("Spell", 236, 341, 8),
    write("X", 220, 324, 12),
    write("Spell", 236, 327, 8),
    write("X", 220, 310, 12),
    write("Spell", 236, 313, 8),
    write("X", 220, 296, 12),
    write("Spell", 236, 299, 8),
    write("X", 220, 282, 12),
    write("Spell", 236, 285, 8),
    write("X", 220, 268, 12),
    write("Spell", 236, 271, 8),
    write("X", 220, 254, 12),
    write("Spell", 236, 257, 8),
    write("X", 220, 240, 12),
    write("Spell", 236, 243, 8),
    write("X", 220, 226, 12),
    write("Spell", 236, 229, 8),
    write("X", 220, 212, 12),
    write("Spell", 236, 215, 8),

    // Level 5
    write("0", 256, 179, 14),
    write("0", 330, 179, 14),
    write("X", 220, 154, 12),
    write("Spell", 236, 157, 8),
    write("X", 220, 140, 12),
    write("Spell", 236, 143, 8),
    write("X", 220, 126, 12),
    write("Spell", 236, 129, 8),
    write("X", 220, 112, 12),
    write("Spell", 236, 115, 8),
    write("X", 220, 98, 12),
    write("Spell", 236, 101, 8),
    write("X", 220, 84, 12),
    write("Spell", 236, 87, 8),
    write("X", 220, 70, 12),
    write("Spell", 236, 73, 8),
    write("X", 220, 56, 12),
    write("Spell", 236, 59, 8),
    write("X", 220, 42, 12),
    write("Spell", 236, 45, 8),

    // Level 6
    write("0", 444, 631, 14),
    write("0", 518, 631, 14),
    write("X", 407, 605, 12),
    write("Spell", 423, 608, 8),
    write("X", 407, 591, 12),
    write("Spell", 423, 594, 8),
    write("X", 407, 577, 12),
    write("Spell", 423, 580, 8),
    write("X", 407, 563, 12),
    write("Spell", 423, 566, 8),
    write("X", 407, 549, 12),
    write("Spell", 423, 552, 8),
    write("X", 407, 535, 12),
    write("Spell", 423, 539, 8),
    write("X", 407, 521, 12),
    write("Spell", 423, 524, 8),
    write("X", 407, 507, 12),
    write("Spell", 423, 510, 8),
    write("X", 407, 493, 12),
    write("Spell", 423, 496, 8),

    // Level 7
    write("0", 444, 461, 14),
    write("0", 518, 461, 14),
    write("X", 407, 435, 12),
    write("Spell", 423, 438, 8),
    write("X", 407, 421, 12),
    write("Spell", 423, 424, 8),
    write("X", 407, 407, 12),
    write("Spell", 423, 410, 8),
    write("X", 407, 393, 12),
    write("Spell", 423, 396, 8),
    write("X", 407, 379, 12),
    write("Spell", 423, 382, 8),
    write("X", 407, 365, 12),
    write("Spell", 423, 368, 8),
    write("X", 407, 351, 12),
    write("Spell", 423, 354, 8),
    write("X", 407, 337, 12),
    write("Spell", 423, 340, 8),
    write("X", 407, 323, 12),
    write("Spell", 423, 326, 8),

    // Level 8
    write("0", 444, 291, 14),
    write("0", 518, 291, 14),
    write("X", 407, 265, 12),
    write("Spell", 423, 268, 8),
    write("X", 407, 251, 12),
    write("Spell", 423, 254, 8),
    write("X", 407, 237, 12),
    write("Spell", 423, 241, 8),
    write("X", 407, 223, 12),
    write("Spell", 423, 226, 8),
    write("X", 407, 209, 12),
    write("Spell", 423, 212, 8),
    write("X", 407, 195, 12),
    write("Spell", 423, 198, 8),
    write("X", 407, 181, 12),
    write("Spell", 423, 184, 8),

    // Level 9
    write("0", 444, 151, 14),
    write("0", 518, 151, 14),
    write("X", 407, 125, 12),
    write("Spell", 423, 128, 8),
    write("X", 407, 111, 12),
    write("Spell", 423, 114, 8),
    write("X", 407, 97, 12),
    write("Spell", 423, 100, 8),
    write("X", 407, 83, 12),
    write("Spell", 423, 86, 8),
    write("X", 407, 69, 12),
    write("Spell", 423, 72, 8),
    write("X", 407, 55, 12),
    write("Spell", 423, 58, 8),
    write("X", 407, 41, 12),
    write("Spell", 423, 44, 8)
  );

  function write(text, x, y, size) {
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

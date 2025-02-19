const fs = require("fs");
const pdfParse = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;  // Extracted text from the PDF
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    throw error;
  }
};

module.exports = { extractTextFromPDF };

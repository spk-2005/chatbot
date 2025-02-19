// Classify user message into different categories (just an example)
const classifyMessage = (message) => {
    if (message.includes("crop") || message.includes("soil")) {
      return "farming";
    } else {
      return "general";
    }
  };
  
  module.exports = { classifyMessage };
  
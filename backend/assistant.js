const axios = require("axios");

const callGPT = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Hello! Can you give me some advice on personal finance?",
          },
        ],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

callGPT([
  {
    role: "user",
    content: "Hello! Can you give me some advice on personal finance?",
  },
]);

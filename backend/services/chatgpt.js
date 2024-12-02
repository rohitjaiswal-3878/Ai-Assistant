const axios = require("axios");
require("dotenv").config();

const instructions =
  "You are a professional financial assistant. Provide detailed, concise, and well-formatted responses to financial queries. Use markdown formatting for readability.";

const connectGPT = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: instructions,
          },
          ...messages,
        ],
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GPT_API}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Connection to GPT failed!");
  }
};

module.exports = { connectGPT };

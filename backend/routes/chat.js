const router = require("express").Router();
const data1 = require("../data/data1.json");
const data2 = require("../data/data2.json");

const { connectGPT } = require("../services/chatgpt");

router.post("/", async (req, res, next) => {
  const { prompt } = req.body;

  const queryHandler = (message) => {
    if (message.includes("revenue") && message.includes("March")) {
      return (
        data1.find((entry) => entry.month === "March")?.revenue ||
        "No data available."
      );
    }
  };
  const messages = prompt.map((msg) => {
    const dataResponse = queryHandler(msg.content);
    if (dataResponse) {
      return { role: "assistant", content: `Data found: ${dataResponse}` };
    }
    return msg;
  });

  try {
    const response = await connectGPT(messages);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

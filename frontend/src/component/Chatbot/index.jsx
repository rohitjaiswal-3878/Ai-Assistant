import React, { useState } from "react";
import styles from "./index.module.css";
import { IoMdSend } from "react-icons/io";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState([]);
  const [current, setCurrent] = useState("");

  const handleInput = (e) => {
    setCurrent(e.target.value);
  };

  const handleSend = () => {
    setMessages([
      ...messages,
      {
        msg: current,
      },
    ]);

    setResponse([
      ...response,
      {
        res: "Sorry we are not able to process the request!",
      },
    ]);
  };
  return (
    <div className={styles.container}>
      {/* Heading */}
      <div className={styles.chatHead}>
        <div className={styles.icon}>
          <img src="/chat-bot.png" alt="chat bot icon." />
        </div>
        <div className={styles.name}>
          <span>Financial Assistant</span>
          <span>Chat bot</span>
        </div>

        <span className={styles.close}>x</span>
      </div>

      {/* Body */}
      <div className={styles.chatSection}>
        {messages.map((item, index) => (
          <div className={styles.messageContainer} key={index}>
            <div className={styles.message}>{item.msg}</div>
          </div>
        ))}

        {response.map((item, index) => {
          <div className={styles.botMessageContainer} key={index}>
            <img src="/chat-bot.png" alt="chat bot icon." />
            <div className={styles.botMessage}>{item.res}</div>
          </div>;
        })}
      </div>

      {/* chat section */}
      <div className={styles.chatBox}>
        <input
          type="text"
          value={current}
          placeholder="Ask us anything..."
          onChange={handleInput}
        />
        <div className={styles.sendIcon} onClick={handleSend}>
          <IoMdSend />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

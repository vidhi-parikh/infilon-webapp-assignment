// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from "react";

const useTask = () => {
  const [number, setNumber] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const printHelloTask = useCallback((count, messagesArray) => {
    if (count <= 0) {
      messagesArray.push("STOP");
      return;
    }
    messagesArray.push("Hello Task");
    printHelloTask(count - 1, messagesArray);
  }, []);

  const handleClick = useCallback(() => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num <= 0) {
      alert("Please enter valid number");
      return;
    }
    const newMessages = [];
    printHelloTask(num, newMessages);

    setMessages(newMessages);
  }, [number, printHelloTask]);

  return {
    number,
    handleChange,
    handleClick,
    messages,
  };
};

export default useTask;

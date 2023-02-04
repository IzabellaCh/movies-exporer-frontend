import React from "react";
import "./Message.css";

function Message({ filteredMovices, searchWord, preloaderIsVisible }) {
  return (
    <section
      className={`message ${
        preloaderIsVisible
          ? ""
          : filteredMovices.length === 0 && searchWord.length !== 0
          ? "message_visible"
          : ""
      } `}
    >
      <p className="message__text">Ничего не найдено</p>
    </section>
  );
}

export default Message;

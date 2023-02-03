import React from "react";
import "./Message.css";

function Message({ filteredMovices, searchWord }) {
  return (
    <section
      className={`message ${
        filteredMovices.length < 1 && searchWord.length !== 0
          ? "message_visible"
          : ""
      } `}
    >
      <p className="message__text">Ничего не найдено</p>
    </section>
  );
}

export default Message;

import React from "react";
import "./InfoTooltip.css";
import useClose from "../../utils/useClose";

function InfoTooltip({ name, title, image, isOpen, onClose }) {
  useClose(isOpen, onClose);

  return (
    <div className={`info-tooltip ${isOpen ? "info-tooltip_opened" : ""}`}>
      <div className="info-tooltip__container">
        <img className="info-tooltip__sign" alt={name} src={image} />
        <h2 className="info-tooltip__heading">{title}</h2>
        <button
          className="info-tooltip__close-button button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;

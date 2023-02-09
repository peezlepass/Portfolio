import React, { useState } from "react";

export default function Constellation({
  width,
  height,
  children,
  horoscope,
  label,
}) {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((currentState) => {
      return !currentState;
    });
  };
  const shortHoroscope = horoscope.split(".").slice(0, 2).join(".") + ".";
  return (
    <div
      className="relative group overflow-y-scroll constellation"
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
      {visible ? (
        <div className="transition-opacity duration-300 text-sm constellation-content">
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${shortHoroscope}`}
            data-size="large"
          >
            Tweet
          </a>
          <h3 className="mt-4 text-md font-bold">{label.toUpperCase()}</h3>
          <p className="mt-4">{shortHoroscope}</p>
        </div>
      ) : null}
    </div>
  );
}

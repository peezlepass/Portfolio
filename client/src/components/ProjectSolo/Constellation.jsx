import React from "react";

export default function Constellation({
  width,
  height,
  children,
  horoscope,
  label,
}) {
  const shortHoroscope = horoscope.split(".").slice(0, 2).join(".") + ".";
  return (
    <div
      className="relative group overflow-y-scroll constellation"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
      <div className="opacity-0 transition-opacity duration-300 text-sm constellation-content">
        {/* <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${shortHoroscope}`}
          data-size="large"
        >
          Tweet
        </a> */}
        <h3 className="mt-4 text-md font-bold">{label.toUpperCase()}</h3>
        <p className="mt-4">{shortHoroscope}</p>
      </div>
    </div>
  );
}

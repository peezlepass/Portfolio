import React from "react";

export default function BackgroundStars() {
  let stars = [];
  for (let i = 0; i < 1000; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.6,
      opacity: Math.random(),
      rotation: Math.random() * 360,
      delay: Math.random() * 0,
    });
  }
  return (
    <div>
      {stars.map(({ x, y, scale, opacity, rotation, delay }, index) => {
        return (
          <span
            key={index}
            className="star-container"
            style={{ left: x + "%", top: y + "%", animationDelay: delay + "s" }}
          >
            <span
              className="star"
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                opacity,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

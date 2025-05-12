import React from "react";

const RotatingSquare = ({
  size = "40px",
  color = "#27ae60",
  speed = 1.5,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animation: `rotate-square ${speed}s linear infinite`,
      }}
    >
      <style>{`@keyframes rotate-square { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default RotatingSquare;

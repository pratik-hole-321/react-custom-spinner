import React from "react";

const FlipDotLoader = ({
  size = "40px",
  color = "green",
  speed = 1.2,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        display: "inline-block",
        animation: `flip ${speed}s infinite ease-in-out`,
        transformOrigin: "center",
      }}
    >
      <style>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FlipDotLoader;

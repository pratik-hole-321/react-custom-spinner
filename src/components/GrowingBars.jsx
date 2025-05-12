import React from "react";

const GrowingBars = ({ color = "#1abc9c", loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
        height: "30px",
      }}
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: "6px",
            height: "10px",
            backgroundColor: color,
            animation: "grow 1s infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes grow {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
      `}</style>
    </div>
  );
};

export default GrowingBars;

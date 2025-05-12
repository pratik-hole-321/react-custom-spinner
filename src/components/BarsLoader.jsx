import React from "react";

const BarsLoader = ({ color = "#e74c3c", loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        alignItems: "flex-end",
        height: "30px",
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: "5px",
            height: "20px",
            backgroundColor: color,
            animation: "bounce 1s infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 100% { height: 20px; }
          50% { height: 30px; }
        }
      `}</style>
    </div>
  );
};

export default BarsLoader;

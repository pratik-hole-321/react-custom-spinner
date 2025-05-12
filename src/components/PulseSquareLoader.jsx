import React from "react";

const PulseSquareLoader = ({
  size = "40px",
  color = "teal",
  speed = 1,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animation: `pulseSquare ${speed}s infinite ease-in-out`,
      }}
    >
      <style>{`
        @keyframes pulseSquare {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default PulseSquareLoader;

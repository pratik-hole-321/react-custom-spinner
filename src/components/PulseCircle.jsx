import React from "react";

const PulseCircle = ({ size = "40px", color = "#3498db", loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        animation: "pulse 1.5s infinite",
      }}
    >
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.5); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(0.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PulseCircle;

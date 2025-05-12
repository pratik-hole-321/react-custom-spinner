import React from "react";

const DualRing = ({ size = "60px", color = "#9b59b6", loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: `4px solid ${color}`,
          borderColor: `${color} transparent ${color} transparent`,
          borderRadius: "50%",
          animation: "dual-ring 1.2s linear infinite",
        }}
      ></div>
      <style>{`
        @keyframes dual-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default DualRing;

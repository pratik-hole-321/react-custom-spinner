import React from "react";

const RipplePulseLoader = ({
  size = "60px",
  color = "deepskyblue",
  speed = 1.5,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: `3px solid ${color}`,
          animation: `ripplePulse ${speed}s infinite`,
        }}
      />
      <style>{`
        @keyframes ripplePulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RipplePulseLoader;

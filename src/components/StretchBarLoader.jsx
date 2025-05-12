import React from "react";

const StretchBarLoader = ({
  size = "40px",
  color = "steelblue",
  speed = 1.2,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: "6px",
        backgroundColor: color,
        animation: `stretchBar ${speed}s infinite ease-in-out`,
      }}
    >
      <style>{`
        @keyframes stretchBar {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.8); }
        }
      `}</style>
    </div>
  );
};

export default StretchBarLoader;

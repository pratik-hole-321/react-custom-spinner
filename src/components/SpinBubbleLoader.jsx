import React from "react";

const SpinBubbleLoader = ({
  size = "40px",
  color = "dodgerblue",
  speed = 1.5,
  loading,
}) => {
  if (!loading) return null;

  const border = "3px";

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${border} solid ${color}`,
        borderTop: `${border} solid transparent`,
        borderRadius: "50%",
        animation: `spinBubble ${speed}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes spinBubble {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SpinBubbleLoader;

import React from "react";

const RingBounceLoader = ({
  size = "40px",
  color = "tomato",
  speed = 1.2,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `3px solid ${color}`,
        borderRadius: "50%",
        animation: `ringBounce ${speed}s infinite alternate ease-in-out`,
      }}
    >
      <style>{`
        @keyframes ringBounce {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default RingBounceLoader;

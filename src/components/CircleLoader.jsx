import React from "react";

const CircleLoader = ({
  size = "50px",
  color = "red ",
  speed = 2,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        border: "4px solid #eee",
        borderTop: `4px solid ${color}`,
        borderRadius: "50%",
        animation: `spin ${speed}s linear infinite`, // tip dynamic speed you can add
      }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default CircleLoader;

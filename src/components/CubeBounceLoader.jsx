import React from "react";

const CubeBounceLoader = ({
  size = "20px",
  color = "crimson",
  speed = 0.6,
  loading,
}) => {
  if (!loading) return null;

  const cubeStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    display: "inline-block",
    animation: `cube-bounce ${speed}s ease-in-out infinite`,
  };

  return (
    <div>
      <span
        style={{ ...cubeStyle, marginRight: "5px", animationDelay: "0s" }}
      />
      <span style={{ ...cubeStyle, animationDelay: "0.3s" }} />
      <style>{`
        @keyframes cube-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default CubeBounceLoader;

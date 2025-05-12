import React from "react";

const SpinDotsLoader = ({
  size = "50px",
  color = "dodgerblue",
  speed = 1.5,
  loading,
}) => {
  if (!loading) return null;

  const dotStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: color,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-5px",
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        animation: `spinDots ${speed}s linear infinite`,
      }}
    >
      <span style={{ ...dotStyle, transform: "translate(20px, 0)" }} />
      <style>{`
        @keyframes spinDots {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SpinDotsLoader;

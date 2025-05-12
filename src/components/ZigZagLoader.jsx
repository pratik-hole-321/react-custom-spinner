import React from "react";

const ZigZagLoader = ({
  size = "15px",
  color = "hotpink",
  speed = 0.3,
  loading,
}) => {
  if (!loading) return null;

  const dotStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
    margin: "5px",
    animation: `zigzag ${speed}s infinite alternate`,
  };

  return (
    <div>
      <span style={{ ...dotStyle, animationDelay: "0s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
      <style>{`
        @keyframes zigzag {
          0% { transform: translate(0, 0); }
          100% { transform: translate(10px, -10px); }
        }
      `}</style>
    </div>
  );
};

export default ZigZagLoader;

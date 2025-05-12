import React from "react";

const BlinkingLoader = ({
  size = "12px",
  color = "red",
  speed = 0.8,
  loading,
}) => {
  if (!loading) return null;

  const dotStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 3px",
    animation: `blink ${speed}s infinite alternate`,
  };

  return (
    <div>
      <span style={{ ...dotStyle, animationDelay: "0s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default BlinkingLoader;

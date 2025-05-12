import React from "react";

const BounceCircleLoader = ({
  size = "20px",
  color = "crimson",
  speed = 0.5,
  loading,
}) => {
  if (!loading) return null;

  const dotStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "50%",
    margin: "5px",
    display: "inline-block",
    animation: `bounceCircle ${speed}s infinite ease-in-out`,
  };

  return (
    <div>
      <span style={{ ...dotStyle, animationDelay: "0s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
      <style>{`
        @keyframes bounceCircle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default BounceCircleLoader;

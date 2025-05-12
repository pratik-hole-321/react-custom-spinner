import React from "react";

const SlideInBarsLoader = ({
  color = "orange",
  barWidth = "6px",
  barHeight = "30px",
  loading,
}) => {
  if (!loading) return null;

  const barStyle = {
    width: barWidth,
    height: barHeight,
    backgroundColor: color,
    margin: "0 4px",
    display: "inline-block",
    animation: "slideInBar 1s ease-in-out infinite",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[0, 0.2, 0.4].map((delay, i) => (
        <span key={i} style={{ ...barStyle, animationDelay: `${delay}s` }} />
      ))}
      <style>{`
        @keyframes slideInBar {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SlideInBarsLoader;

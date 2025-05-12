import React from "react";

const DotsWave = ({ size = "20px", color = "#8e44ad", loading }) => {
  if (!loading) return null;

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `wave 1s infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};
export default DotsWave;

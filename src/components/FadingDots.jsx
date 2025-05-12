import React from "react";

const FadingDots = ({ color = "#2ecc71", loading }) => {
  if (!loading) return null;

  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: color,
            animation: "fade 1.4s infinite",
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes fade {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FadingDots;

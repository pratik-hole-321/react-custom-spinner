import React from "react";

const ShimmerLineLoader = ({
  width = "200px",
  height = "10px",
  bg = "#eee",
  color = "red",
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width,
        height,
        backgroundColor: bg,
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          animation: "shimmerMove 1.2s infinite",
        }}
      />
      <style>{`
        @keyframes shimmerMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default ShimmerLineLoader;

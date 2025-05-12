import React from "react";

const RippleLoader = ({ size = "80px", color = "#e67e22", loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          position: "absolute",
          border: `4px solid ${color}`,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          animation: "ripple 1.5s infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          border: `4px solid ${color}`,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          animation: "ripple 1.5s infinite",
          animationDelay: "0.75s",
        }}
      ></div>

      <style>{`
        @keyframes ripple {
          0% {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RippleLoader;

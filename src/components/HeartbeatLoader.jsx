import React from "react";

const HeartbeatLoader = ({
  size = "30px",
  color = "red",
  speed = 1,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        transform: "rotate(45deg)",
        animation: `heartbeat ${speed}s infinite ease-in-out`,
        position: "relative",
      }}
    >
      <div
        style={{
          content: "",
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          position: "absolute",
          top: `-${parseInt(size) / 2}px`,
          left: 0,
        }}
      />
      <div
        style={{
          content: "",
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          position: "absolute",
          left: `${parseInt(size) / 2}px`,
          top: 0,
        }}
      />
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default HeartbeatLoader;

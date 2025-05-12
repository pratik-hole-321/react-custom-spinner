import React from "react";

const PuffLoader = ({
  size = "40px",
  color = "purple",
  speed = 1.5,
  loading,
}) => {
  if (!loading) return null;

  const sizeValue = parseInt(size);

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: color,
          opacity: 0.6,
          position: "absolute",
          animation: `puff ${speed}s infinite ease-in-out`,
        }}
      />
      <style>{`
        @keyframes puff {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PuffLoader;

import React from "react";

const TunnelSpinner = ({
  size = "40px",
  color = "teal",
  speed = 1,
  loading,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `4px solid ${color}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: `tunnel-spin ${speed}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes tunnel-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default TunnelSpinner;

import React, { useState } from "react";

const TickIcon = () => {
  const [showPolyline, setShowPolyline] = useState(false);

  const handleClick = () => {
    setShowPolyline(!showPolyline);
  };
  return (
    <svg
      className="tickIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 512 512"
      onClick={handleClick}
    >
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" />

      {/* Toggle the polyline based on showPolyline state */}
      {showPolyline && (
        <polyline points="352 176 217.6 336 160 272" stroke="white" />
      )}
    </svg>
  );
};
export default TickIcon;

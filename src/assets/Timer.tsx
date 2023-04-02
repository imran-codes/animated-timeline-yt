import React from "react";

interface TimerProps {
  fill: string;
}

const Timer: React.FC<TimerProps> = ({ fill = "#1A191C" }) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M12 7L12 12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 4L20 3"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Timer;

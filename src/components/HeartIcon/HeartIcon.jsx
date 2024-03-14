import React from "react";

const HeartIcon = ({ strokeColor = "white", fillColor = "transparent" }) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9384 18.5858L2.58383 10.2313C0.472055 8.11948 0.472056 4.69561 2.58383 2.58383C4.69561 0.472056 8.11948 0.472056 10.2313 2.58383L10.9384 3.29094L11.6455 2.58383C13.7572 0.472056 17.1811 0.472056 19.2929 2.58383C21.4047 4.69561 21.4047 8.11948 19.2929 10.2313L10.9384 18.5858Z"
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth="2"
      />
    </svg>
  );
};

export default HeartIcon;

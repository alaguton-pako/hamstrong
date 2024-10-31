import React from "react";

const NairaIcon = ({ style }) => {
  return (
    <>
      <svg
        className="icon icon-tabler icon-tabler-currency-naira"
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "inline",
          verticalAlign: "middle",
          marginBottom: "3px",
          ...style, // Allow passing additional styles if needed
        }}
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" />
        <path d="M5 10h14" />
        <path d="M5 14h14" />
      </svg>
    </>
  );
};

export default NairaIcon;

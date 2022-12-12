import React, { FC } from "react";

interface IconColor {
  color: string;
}
interface Arrow {
  direction?: "next" | "prev";
  iconStyle?: "Next" | "Prev";
}

const Prev: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.625 1.49994L2.125 5.99994L6.625 10.4999M2.75 5.99994H11.875"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
const Next: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.375 1.49994L10.875 5.99994L6.375 10.4999M10.25 5.99994H1.125"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};

const Arrow: FC<Arrow> = ({ iconStyle = "Next" }) => {
  const components: any = {
    Next: Next,
    Prev: Prev,
  };
  const SelectedComponent = components[iconStyle];
  return <SelectedComponent />;
};

export default Arrow;

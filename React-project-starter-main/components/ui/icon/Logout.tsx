import { FC } from "react";

interface Props {
  className?: string;
}
const Logout: FC<Props> = ({ className = "" }) => (
  <svg
    width="40"
    height="34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#a)">
      <path
        d="M9.293 25.724 0 16.768l9.293-8.89v5.96h13.906v5.926H9.293v5.96Zm5.59-17.24-3.57-3.602c3.502-3.277 7.295-4.916 11.38-4.916 4.871 0 8.974 1.61 12.307 4.832 3.333 3.221 5 7.245 5 12.07 0 3.031-.763 5.837-2.29 8.418a16.805 16.805 0 0 1-6.178 6.111c-2.593 1.493-5.404 2.24-8.434 2.24-4.13 0-8.047-1.662-11.751-4.984l3.535-3.569c2.56 2.335 5.286 3.502 8.182 3.502 3.345 0 6.167-1.167 8.468-3.502 2.3-2.334 3.451-5.185 3.451-8.552 0-3.143-1.184-5.847-3.552-8.114-2.368-2.268-5.146-3.401-8.333-3.401-2.94 0-5.68 1.156-8.216 3.468Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="rotate(-180 20 16.835)"
          d="M0 0h40v33.67H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Logout;

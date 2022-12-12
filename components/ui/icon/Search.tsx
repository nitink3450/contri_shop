import { FC } from "react";

interface Props {
  className?: string;
}
const Search: FC<Props> = ({ className = "" }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    className={className}
  >
    <path
      d="M10.833 19.5c1.923 0 3.79-.644 5.305-1.829l4.763 4.763 1.532-1.532-4.763-4.762a8.615 8.615 0 0 0 1.83-5.307c0-4.778-3.888-8.666-8.667-8.666-4.778 0-8.666 3.888-8.666 8.666 0 4.779 3.888 8.667 8.666 8.667Zm0-15.167c3.585 0 6.5 2.916 6.5 6.5 0 3.585-2.915 6.5-6.5 6.5a6.507 6.507 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5Z"
      fill="currentColor"
    />
  </svg>
);
export default Search;

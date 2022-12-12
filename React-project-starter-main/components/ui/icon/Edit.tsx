import { FC } from "react";

interface Props {
  className?: string;
}
const Edit: FC<Props> = ({ className = "" }) => (
  <svg
    width="17"
    height="17"
    fill="none"
    viewBox="0 0 17 17"
    className={className}
  >
    <path
      d="M1.052 16.864a.915.915 0 0 1-.676-.299.906.906 0 0 1-.241-.7l.225-2.47 10.374-10.37 3.243 3.24-10.372 10.37-2.47.225a.86.86 0 0 1-.083.004ZM14.624 5.618l-3.242-3.242L13.328.432a.918.918 0 0 1 1.297 0l1.944 1.944a.917.917 0 0 1 0 1.297l-1.943 1.944h-.001Z"
      fill="currentColor"
    />
  </svg>
);
export default Edit;

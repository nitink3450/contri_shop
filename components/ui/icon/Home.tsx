import { FC } from "react";

interface Props {
  className?: string;
}
const Home: FC<Props> = ({ className = "" }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.852 30.315 26.364 8.803a2.315 2.315 0 0 1 3.273 0l21.511 21.512h-4.63v18.518a2.315 2.315 0 0 1-2.314 2.315H32.63V34.945h-9.26v16.203H11.797a2.315 2.315 0 0 1-2.314-2.315V30.316h-4.63Z"
      fill="currentColor"
    />
  </svg>
);
export default Home;

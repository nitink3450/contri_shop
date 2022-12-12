import { FC } from "react";

interface Props {
  className?: string;
}
const Activity: FC<Props> = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.968 7.969c.008 4.399-3.58 7.996-7.978 7.999A7.95 7.95 0 012.973 14.2a.772.772 0 01-.059-1.146l.363-.363a.774.774 0 011.026-.064 5.9 5.9 0 003.68 1.28 5.92 5.92 0 005.924-5.923A5.92 5.92 0 007.984 2.06c-1.572 0-2.999.611-4.059 1.608L5.56 5.302a.515.515 0 01-.364.88H.515A.515.515 0 010 5.665V.986C0 .527.555.297.88.622l1.589 1.59a7.984 7.984 0 0113.5 5.758zm-5.824 2.536l.316-.406a.773.773 0 00-.136-1.085l-1.31-1.019v-3.36a.773.773 0 00-.773-.772h-.515a.773.773 0 00-.772.773v4.367l2.105 1.638a.773.773 0 001.085-.136z"
      fill="currentColor"
    ></path>
  </svg>
);
export default Activity;

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./BrandLogo.module.scss";

interface Props {
  className?: string;
  imagePath?: string;
}

const BrandLogo: FC<Props> = ({
  className = "",
  imagePath = "/images/logo.png",
}) => (
  <Link href="/">
    <a className={`${s.logoWrapper} ${className}`}>
      <Image
        src={imagePath}
        width="200px"
        height="189px"
        objectFit="contain"
        loading="eager"
      />
    </a>
  </Link>
);

export default BrandLogo;

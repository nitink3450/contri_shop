import Image from "next/image";
import React from "react";

import s from "./Figma.module.scss";
const Figma = () => {
  const big = (e) => {
    e.target.nextElementSibling.style.transition = "2s all linear 0s";
    e.target.nextElementSibling.style.transform = "scale(1.4)";
    e.target.nextElementSibling.style.left = "-.2vw";
  };
  return (
    <div className={s.container}>
      <div className={s.Mwrapper}>
        <div className={s.images}>
          <div onMouseOver={big} className={`${s.img} ${s.leftM}`}>
            <Image
              //   layout="fill"
              height="460"
              width="350"
              alt=""
              src="/images/left-mob.png"
            />
          </div>
          <div className={`${s.img} ${s.ball}`}>
            <Image height="350" width="350" alt="" src="/images/ball.png" />
          </div>
          <div className={`${s.img} ${s.rightM}`}>
            <Image
              //   layout="fill"
              height="460"
              width="350"
              alt=""
              src="/images/right-mob.png"
            />
          </div>
          <div className={`${s.img} ${s.barman}`}>
            <Image height="350" width="350" alt="" src="/images/barman.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figma;

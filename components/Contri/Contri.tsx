import { Image } from "antd";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import s from "./Contri.module.scss";
// import img1 from '../../public/images/hoody/1.png';
// import img2 from '../../public/images/hoody/2.png';
// import img3 from '../../public/images/hoody/3.png';
// import img4 from '../../public/images/hoody/4.png';
// import img5 from '../../public/images/hoody/5.png';
const Contri = () => {
  // const arr = [img1,img2,img3,img4,img5];
  return (
    <>
      <div className={s.mainCont}>
        <div className={`${s.imageWrapper} ${s.one}`}>
          <Parallax rotateY={["0deg", "360deg"]}>
            {/* {arr.map(val=>{ */}
              <Image
              className={s.one}
              alt=""
              height=""
              width=""
              src={`/Images/hoody/33.png`}
            />
            {/* })} */}
          </Parallax>
        </div>

        <Parallax rotateY={["0deg", "360deg"]}>
          <h1 className={s.wear}>Wear your Contibution</h1>
        </Parallax>
        <div className={`${s.imageWrapper} ${s.two}`}>
          <Parallax >
            <Image
              className={s.one}
              alt=""
              height=""
              width=""
              src="/Images/hoody/37.png"
            />
          </Parallax>
        </div>
        <div className={`${s.imageWrapper} ${s.three}`}>
          <Parallax >
            <Image
              className={s.one}
              alt=""
              height=""
              width=""
              src="/Images/hoody/49.png"
            />
          </Parallax>
        </div>

        <div className={s.h100}></div>
      </div>
    </>
  );
};

export default Contri;

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import s from "./Contri1.module.scss";
import { Tween } from "react-gsap";
import { ScrollTrigger, Square } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
const Contri1 = () => {
  const triggerRef = useRef(null);
  const [trigger, setTrigger] = useState(triggerRef.current);
  useEffect(() => {
    setTrigger(triggerRef.current);
  }, []);
  // const target = useRef(null);
  // // const arr = [];
  // const [count, setCount] = useState(1);
  // window.addEventListener("scroll", () => {
  //   setCount(count + 1);
  // });
  // window.onscroll = function () {
  //   var theta = (document.documentElement.scrollTop / 50) % Math.PI;
  // //  const ele =  document.getElementsByTagName("Image")[0];
  // //  ele.style.transform =  `rotate(${theta}rad)`
  //  target.current.style.transform =  `rotateY(${theta}rad)`
  // };
  // console.log(window.innerHeight)
  return (
    <div className={s.Contri1_Main}>
      {/* <div ref={target} className={s.Image_wrap}>
        <Image
          id="logo"
          alt=""
          src={`/Images/hoody/${count}.png`}
          height={600}
          width={800}
        />
      </div>
      <div className={s.h_100}>TEXT</div>
      <div className={s.h_100}>TEXT</div>
      <div className={s.h_100}>TEXT</div>
      <div className={s.h_100}>TEXT</div>
      <div className={s.h_100}>TEXT</div>
      <div className={s.h_100}>TEXT</div> */}
      <ScrollTrigger trigger={trigger}>
        <Tween
          to={{
            x: "500px",
          }}
        >
          <div>This element gets not tweened by ref</div>
        </Tween>
      </ScrollTrigger>
      <Square ref={triggerRef}>This element is the trigger</Square>
    </div>
  );
};

export default Contri1;

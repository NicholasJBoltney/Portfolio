import "./Hero.css";
import LeftFront from "../../assets/PNG/LeftF.png";
import LeftBack from "../../assets/PNG/LeftB.png";
import RightFront from "../../assets/PNG/RightF.png";
import RightBack from "../../assets/PNG/RightB.png";
import Light from "../../assets/SVG/Ellipse 1.svg";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  let LeftFrontClassName = "LeftFront";
  let LeftBackClassName = "LeftBack";
  let RightFrontClassName = "RightFront";
  let RightBackClassName = "RightBack";
  let Container = useRef(null);

  const isInView = useInView(Container, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  // let { scrollYProgress } = useScroll({
  //   target: carHolderRef,
  //   offset: ["start end", "end start"],
  // });
  // let x = useTransform(scrollYProgress, [0, 1], [0, 3200]);
  // let y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  // let scale = useTransform(scrollYProgress, [0, 1], [0, 4]);
  // let backgroundColor = useTransform(
  //   scrollYProgress,
  //   [0.95, 1],
  //   ["#1e1e1e00", "#4A93FF"]
  // );

  return (
    <div className="MainHeroHolder">
      <div className="LightHolder">
        <img className="Light" src={Light} />
      </div>

      <div className="TitleHolder">
        <div className="NameHolder">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -400 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2 }}
            className="Name"
          >
            Nicholas Boltney
          </motion.h2>
        </div>

        <div className="FEDHolder">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 300, zIndex: 98 },
              visible: { opacity: 1, y: 0, zIndex: 98 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2 }}
            className="FED"
          >
            Front-end Developer
          </motion.h1>
        </div>
      </div>
      <div ref={Container} className="HeroHolder">
        <div className="Holders">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -400 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            <MoveMountain
              MountainSrc={LeftBack}
              CustomClassName={LeftBackClassName}
              Container={Container}
              ZIndex={98}
              XMove={-600}
              YMove={200}
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 400 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            <MoveMountain
              MountainSrc={RightBack}
              CustomClassName={RightBackClassName}
              Container={Container}
              ZIndex={98}
              XMove={600}
              YMove={200}
            />
          </motion.div>
        </div>
        <div className="Holders">
          <MoveMountain
            MountainSrc={LeftFront}
            CustomClassName={LeftFrontClassName}
            Container={Container}
            ZIndex={100}
            XMove={-200}
            YMove={0}
          />
          <MoveMountain
            MountainSrc={RightFront}
            CustomClassName={RightFrontClassName}
            Container={Container}
            ZIndex={100}
            XMove={200}
            YMove={0}
          />
        </div>
      </div>
    </div>
  );
}

function MoveMountain(props) {
  let { scrollYProgress } = useScroll({
    target: props.Container,
    offset: ["start start", "end end"],
  });
  let zIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [props.ZIndex, props.ZIndex]
  );

  return (
    <motion.div
      style={{
        x: useTransform(scrollYProgress, [0, 1], [0, props.XMove]),
        y: useTransform(scrollYProgress, [0, 1], [0, props.YMove]),
        zIndex: zIndex,
      }}
    >
      <img className={props.CustomClassName} src={props.MountainSrc} />
    </motion.div>
  );
}

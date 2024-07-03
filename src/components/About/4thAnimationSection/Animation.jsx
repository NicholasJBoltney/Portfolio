import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Animation.css";

import PlaneSketch4 from "./Planes/PlanesSketch4";

export default function Animation() {
  let AnimationLetter = useRef(null);
  let { scrollYProgress } = useScroll({
    target: AnimationLetter,
    offset: ["start start", "end end"],
  });

  let yValue = useTransform(scrollYProgress, [0, 1], [0, 800]);
  let topDownOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  let bottomUp = useTransform(scrollYProgress, [0, 1], [280, 80]);
  let scale = useTransform(scrollYProgress, [0.5, 1], [1, 30]);
  let color = useTransform(scrollYProgress, [0.5, 1], ["#1e1e1e", "#1e1e1e00"]);

  return (
    <div>
      {/* <div className="AnimationTextHolder"></div> */}
      <div className="MainHolderAnimation">
        <motion.h1
          ref={AnimationLetter}
          style={{ y: yValue, opacity: topDownOpacity }}
          className="AnimationText"
        >
          ANIMATION
        </motion.h1>
        <div className="PlanesHolder">
          <PlaneSketch4 />
        </div>
      </div>
    </div>
  );
}

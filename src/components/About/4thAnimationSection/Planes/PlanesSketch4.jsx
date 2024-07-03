import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import PlaneSketch4SVG from "../../../../assets/SVG/send-svgrepo-com.svg";

export default function PlaneSketch4() {
  let PlaneRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: PlaneRef,
    offset: ["start end", "end center"],
  });

  let yMove = useTransform(scrollYProgress, [0, 1], [-50, -300]);
  let xMove = useTransform(scrollYProgress, [0, 1], [200, -300]);
  let rotation = useTransform(scrollYProgress, [0, 1], [-110, 0]);
  let opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  return (
    <div>
      <motion.img
        ref={PlaneRef}
        style={{ y: yMove, x: xMove, rotate: rotation, opacity }}
        src={PlaneSketch4SVG}
        className="FinalPlane"
      />
    </div>
  );
}

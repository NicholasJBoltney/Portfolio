import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import PlaneSketch3SVG from "../../../../assets/SVG/send-svgrepo-com.svg";

export default function PlaneSketch3() {
  let PlaneRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: PlaneRef,
    offset: ["start end", "end start"],
  });

  let yMove = useTransform(scrollYProgress, [0.5, 1], [0, 480]);
  let xMove = useTransform(scrollYProgress, [0.5, 1], [0, 400]);
  let rotation = useTransform(scrollYProgress, [0, 1], [0, 110]);
  return (
    <div>
      <motion.img
        ref={PlaneRef}
        style={{ y: yMove, x: xMove, rotate: rotation }}
        src={PlaneSketch3SVG}
        className="FinalPlane"
      />
    </div>
  );
}

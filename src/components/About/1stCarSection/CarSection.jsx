import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CarSvg from "../../../assets/SVG/CarWhite.svg";
import Smoke from "../../../assets/SVG/Smoke.svg";
import "./CarSection.css";

export default function CarSection() {
  let carHolderRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: carHolderRef,
    offset: ["start end", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], [0, 3200]);
  let y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  let scale = useTransform(scrollYProgress, [0, 1], [0, 4]);
  let backgroundColor = useTransform(
    scrollYProgress,
    [0.95, 1],
    ["#1e1e1e00", "#1e1e1e00"]
    // 1e1e1e00
  );

  return (
    <div className="StaticCarHolder">
      <motion.div
        ref={carHolderRef}
        style={{ x, y, scale, backgroundColor }}
        className="CarHolder"
      >
        <img src={Smoke} className="Smoke" alt="" />
        <img src={CarSvg} className="Car" alt="" />
      </motion.div>
    </div>
  );
}

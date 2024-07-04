import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Design.css";

export default function Design() {
  return (
    <div>
      <div className="DesignTextHolder">
        <FlipText>DESIGN</FlipText>
        <FlipText>ANIMATION</FlipText>
        <FlipText>INTERACTIVITY</FlipText>
        <div className="EndingHolder">
          <h2 className="DesignTextFinal">I am excited to contribute</h2>{" "}
          <h2 className="DesignTextFinal">to your team</h2>
        </div>
      </div>
    </div>
  );
}

const DURATION = 0.3;
const STAGGER = 0.025;

const FlipText = ({ children }) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      className="ChildTextHolder"
      // className="whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      // style={{
      //   lineHeight: 0.75,
      // }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
                opacity: 1,
              },
              hovered: {
                y: "-100%",
                opacity: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="ChildText"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="ChildText2Holder">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              hovered: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="ChildText2"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};

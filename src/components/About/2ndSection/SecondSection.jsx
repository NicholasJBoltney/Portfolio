import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "./SecondSection.css";

export default function SecondSection() {
  let secondTextHolderRef = useRef(null);
  let thirdTextHolderRef = useRef(null);
  const isInView = useInView(secondTextHolderRef, { once: true });
  const isInView2 = useInView(thirdTextHolderRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  useEffect(() => {
    if (isInView2) {
      mainControls.start("visible2");
    }
  }, [isInView2]);

  return (
    <div>
      <motion.div
        ref={secondTextHolderRef}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: -100 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2 }}
        className="TextHolder"
      >
        <p className="TextSecondS">with a background in</p>
        <FlipTextt First="web" Last="game" />
        <p className="TextSecondS">development</p>
      </motion.div>

      <motion.div
        ref={thirdTextHolderRef}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible2: { opacity: 1, y: -100 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2 }}
        className="TextHolderLast"
      >
        <h1 className="TextSecondS">and a passion for</h1>
      </motion.div>
    </div>
  );
}

const DURATION = 0.3;
const STAGGER = 0.025;

const FlipTextt = (props) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      className="ChildTextHolder2"
      // className="whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      // style={{
      //   lineHeight: 0.75,
      // }}
    >
      <div className="TextSecondS">
        {props.First.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
                opacity: 1,
                backgroundColor: "#1e1e1e",
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
            className="ChildText2nd"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="ChildText2Holder2nd">
        {props.Last.split("").map((l, i) => (
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
            className="ChildText22nd"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};

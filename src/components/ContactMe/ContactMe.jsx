import { useEffect, useRef } from "react";
import "./ContactMe.css";
import Phone from "../../assets/SVG/phone-svgrepo-com.svg";
import Email from "../../assets/SVG/email-svgrepo-com.svg";
import LinkedIn from "../../assets/SVG/linkedin-svgrepo-com.svg";
import Github from "../../assets/SVG/github-svgrepo-com.svg";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ContactMe() {
  const HeadingHolder = useRef(null);
  const isInView = useInView(HeadingHolder, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="MainHolderContact">
      <motion.div
        className="HeadingHolder"
        ref={HeadingHolder}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <div className="line"></div>

        <div className="Heading">
          <FlipText>CONTACT</FlipText>
        </div>
        <div className="line"></div>
      </motion.div>

      <div className="ContactsHolder">
        <motion.div
          className="InfoHolder"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <img src={Phone} className="svgElementContact" alt="" />
          <p className="ContactText">+27 064-497-5818</p>
        </motion.div>
        <motion.div
          className="InfoHolder"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <img src={Email} className="svgElementContact" alt="" />
          <p className="ContactText">nicholasjboltney@gmail.com</p>
        </motion.div>{" "}
        <motion.div
          className="InfoHolder"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <img src={LinkedIn} className="svgElementContact" alt="" />
          <a
            href="https://www.linkedin.com/in/nicholas-boltney-95764a29b/"
            target="_blank"
            rel="noopener noreferrer"
            className="ContactText"
          >
            View profile
          </a>
        </motion.div>{" "}
        <motion.div
          className="InfoHolder"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <img src={Github} className="svgElementContact" alt="" />
          <a
            href="https://github.com/NicholasJBoltney?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="ContactText"
          >
            Github repositories
          </a>
        </motion.div>
      </div>
    </div>
  );
}
const DURATION = 0.3;
const STAGGER = 0.025;

const FlipText = ({ children }) => {
  return (
    <div className="HolderTry">
      <motion.p
        initial="initial"
        whileHover="hovered"
        className="ChildTextHolderSkills"
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
              className="ChildTextSkills"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>

        <div className="ChildText2HolderSkills">
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
    </div>
  );
};

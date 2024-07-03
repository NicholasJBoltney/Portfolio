import { useAnimation, useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  const HeadingHolder = useRef(null);
  const isInView = useInView(HeadingHolder, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="MainHolderProjects">
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
          <FlipText>PROJECTS</FlipText>
        </div>
        <div className="line"></div>
      </motion.div>

      <div className="CardHolderProjectsMain">
        <div className="CardHolderProjects">
          <motion.div
            className="ProjectsCard"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <h3 className="ProjectsCardHeading">Music Learning</h3>
            <div className="ProjectDescription">
              <p>
                Mobile app aimed at helping the visually impaired learn,
                practice and play music.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="ProjectsCard"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <h3 className="ProjectsCardHeading">Clothing Store</h3>
            <div className="ProjectDescription"></div>
          </motion.div>

          <motion.div
            className="ProjectsCard"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <h3 className="ProjectsCardHeading">Game Development</h3>
            <div className="ProjectDescription"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const DURATION = 0.3;
const STAGGER = 0.025;

const FlipText = ({ children }) => {
  return (
    <div>
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

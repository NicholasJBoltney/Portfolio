import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Skills.css";
import HtmlSvg from "../../assets/SVG/html5-01-svgrepo-com.svg";
import CssSvg from "../../assets/SVG/Csssvg-edited.svg";
import JSSvg from "../../assets/SVG/javascript-svgrepo-com.svg";
import ReactSvg from "../../assets/SVG/react-svgrepo-com.svg";
import AngularSvg from "../../assets/SVG/angular-svgrepo-com.svg";
import NodeSvg from "../../assets/SVG/nodesvg-edited.svg";
import ExpoSvg from "../../assets/SVG/expo-svgrepo-com.svg";
import UnitySvg from "../../assets/SVG/unity-svgrepo-com.svg";
import UESvg from "../../assets/SVG/unreal-engine-svgrepo-com.svg";

export default function Skills() {
  const HeadingHolder = useRef(null);
  const isInView = useInView(HeadingHolder, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="MainHolderSkills">
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
        <div className="lineSkills"></div>

        <div className="Heading">
          <FlipText>SKILLS</FlipText>
        </div>
        <div className="lineSkills"></div>
      </motion.div>

      <div className="LogoHolderMain">
        <div className="LogoHolder">
          <img src={HtmlSvg} className="svgElement" alt="" />
          <img src={CssSvg} className="svgElement" alt="" />{" "}
          <img src={JSSvg} className="svgElement" alt="" />
          <img src={ReactSvg} className="svgElement" alt="" />{" "}
          <img src={AngularSvg} className="svgElement" alt="" />
          <img src={NodeSvg} className="svgElement" alt="" />
          <img src={ExpoSvg} className="svgElement" alt="" />
          <img src={UnitySvg} className="svgElement" alt="" />
          <img src={UESvg} className="svgElement" alt="" />
        </div>
      </div>

      <div className="CardHolderMain">
        <div className="CardHolder">
          <div className="SkillsCard">
            <h3 className="SkillCardHeading">Web Development</h3>
            <div className="LanguagesHolder">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Angular</p>
              <p>ASP.NET Core</p>
            </div>
          </div>

          <div className="SkillsCard">
            <h3 className="SkillCardHeading">Mobile Development</h3>
            <div className="LanguagesHolder">
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React Native</p>
              <p>Expo</p>
            </div>
          </div>

          <div className="SkillsCard">
            <h3 className="SkillCardHeading">Game Development</h3>
            <div className="LanguagesHolder">
              <p>Unity</p>
              <p>Unity's NGO</p>
              <p>Unreal Engine 4/5</p>
            </div>
          </div>
        </div>
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

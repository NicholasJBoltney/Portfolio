import "./About.css";
import CarSection from "./1stCarSection/CarSection.jsx";
import SecondSection from "./2ndSection/SecondSection.jsx";
import Design from "./3rdDesignText/Design.jsx";

export default function About() {
  return (
    <div className="background">
      <div className="MainHolder">
        <div className="Step1">
          <div className="textHolder">
            <h1 className="text">As a driven individual</h1>
          </div>
          <CarSection />
        </div>
        <div className="Step2">
          <SecondSection />
          <Design />
        </div>
      </div>
    </div>
  );
}

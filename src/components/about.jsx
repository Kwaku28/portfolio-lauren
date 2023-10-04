import { IconContext } from "react-icons";
import { SiRubyonrails, SiJavascript } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { BiAlbum } from "react-icons/bi";
import { motion } from "framer-motion";
import "../styles/about.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "30%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <div className="circle"></div>
        <h2>
          <span>A</span>bout Me
        </h2>
        <p className="about-profile">
          <b>Hello! My name is Lawrence Amoafo</b> <br />
          A full stack developer with the expertise of implementing visually
          appealing and responsive web interfaces while also implementing robust
          back-end functionalities.
          <br />I am passionate about cutting-edge, pixel-perfect, beautiful
          interfaces and intuitively implemented UX.
        </p>
      </div>
      <div className="my_services">
        <div className="circle"></div>
        <h3>
          <span>M</span>y Services
        </h3>
        <div className="services">
          <div className="service">
            <div>
              <ion-icon name="logo-react"></ion-icon>
            </div>
            <h4>Front-End</h4>
            <p>
              Crafting modern, mobile-responsive websites that bring your
              digital vision to life, one line of code at a time.
            </p>
          </div>
          <div className="service">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div>
                <SiRubyonrails />
              </div>
            </IconContext.Provider>
            <h4>Back-End</h4>
            <p>
              Implementing robust back-end functionalities. Focus also on
              database management and API integration.
            </p>
          </div>
        </div>
      </div>
      <div className="fun_facts">
        <div className="circle"></div>
        <h3>
          <span>F</span>un Facts
        </h3>
        <div className="services">
          <div className="facts">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div>
                <SiJavascript />
              </div>
            </IconContext.Provider>
            <h4>5000+ lines of code</h4>
          </div>
          <div className="facts">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div>
                <BiAlbum />
              </div>
            </IconContext.Provider>
            <h4>100+ Albums listened</h4>
          </div>
          <div className="facts">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div>
                <IoGameController />
              </div>
            </IconContext.Provider>
            <h4>Video Game Enthusiast</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

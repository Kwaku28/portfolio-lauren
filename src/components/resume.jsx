import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { IconContext } from "react-icons";
import { IoSchool, IoBriefcase, IoCodeSlash } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import "../styles/resume.css";

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

const Resume = () => {
  return (
    <motion.div
      className="resume-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="resume">
        <div className="circle"></div>
        <h2>
          <span>R</span>esume
        </h2>
      </div>
      <div className="resume-body">
        <div className="resume-body-left">
          <div className="resume-body-head">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className="round">
                <IoSchool />
              </div>
            </IconContext.Provider>
            <h3>Education</h3>
          </div>
          <div className="resume-body-left-education">
            <p className="date">2022 - 2023</p>
            <h4>Microvers</h4>
            <p>Remote Full Stack Web Development</p>
          </div>
          <div className="resume-body-left-education">
            <p className="date">2020 - 2021</p>
            <h4>Architectural Design Course</h4>
            <p>
              Learned by practice ArchiCAD BIM Technology with real building
              projects
            </p>
          </div>
          <div className="resume-body-left-education">
            <p className="date">2014 - 2018</p>
            <h4>KNUST Ghana</h4>
            <p>Bachelor of Science</p>
          </div>
        </div>
        <div className="resume-body-right">
          <div className="resume-body-head">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className="round">
                <IoBriefcase />
              </div>
            </IconContext.Provider>
            <h3>Experience</h3>
          </div>
          <div className="resume-body-right-experience">
            <p className="date">2022 - Present</p>
            <h4>Freelancer</h4>
            <p>Full-Stack Web Developer</p>
          </div>
          <div className="resume-body-right-experience">
            <p className="date">2023 - Present</p>
            <h4>Microverse</h4>
            <p>Mentorship of junior developers</p>
          </div>
          <div className="resume-body-right-experience">
            <p className="date">2021 - 2022</p>
            <h4>iSON Xperiences</h4>
            <p>Customer Service Representative</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="circle"></div>
        <h2>
          <span>S</span>kills
        </h2>
        <div className="skills-body">
          <div className="skills-body-left">
            <div className="skills-body-head">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <div className="round">
                  <IoCodeSlash />
                </div>
              </IconContext.Provider>
              <h3>Coding</h3>
            </div>
            <div className="technologies">
              <div className="tech">
                <div>
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      pathColor: "#e2bc52",
                      textColor: "#e9e7d8",
                    })}
                  />
                </div>
                <p>HTML5 / CSS3</p>
              </div>
              <div className="tech">
                <div>
                  <CircularProgressbar
                    value={80}
                    text={`${80}%`}
                    styles={buildStyles({
                      pathColor: "#e2bc52",
                      textColor: "#e9e7d8",
                    })}
                  />
                </div>
                <p>React / JavaScript</p>
              </div>
              <div className="tech">
                <div>
                  <CircularProgressbar
                    value={65}
                    text={`${65}%`}
                    styles={buildStyles({
                      pathColor: "#e2bc52",
                      textColor: "#e9e7d8",
                    })}
                  />
                </div>
                <p>Ruby on Rails / Ruby</p>
              </div>
              <div className="tech">
                <div>
                  <CircularProgressbar
                    value={65}
                    text={`${65}%`}
                    styles={buildStyles({
                      pathColor: "#e2bc52",
                      textColor: "#e9e7d8",
                    })}
                  />
                </div>
                <p>PostgreSQL / MongoDB</p>
              </div>
              <div className="tech">
                <div>
                  <CircularProgressbar
                    value={45}
                    text={`${45}%`}
                    styles={buildStyles({
                      pathColor: "#e2bc52",
                      textColor: "#e9e7d8",
                    })}
                  />
                </div>
                <p>Nodejs/Express</p>
              </div>
            </div>
          </div>
          <div className="skills-body-right">
            <div className="skills-body-head">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <div className="round">
                  <BsListTask />
                </div>
              </IconContext.Provider>
              <h3>Knowledge</h3>
            </div>
            <div className="knowledge">
              <div className="knowledge-list">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div>
                    <TiTick />
                  </div>
                </IconContext.Provider>
                <p>RESTful APIs </p>
              </div>
              <div className="knowledge-list">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div>
                    <TiTick />
                  </div>
                </IconContext.Provider>
                <p>Database Management</p>
              </div>
              <div className="knowledge-list">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div>
                    <TiTick />
                  </div>
                </IconContext.Provider>
                <p>Responsive and mobile-ready</p>
              </div>
              <div className="knowledge-list">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div>
                    <TiTick />
                  </div>
                </IconContext.Provider>
                <p>HTML5, CSS3</p>
              </div>
              <div className="knowledge-list">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div>
                    <TiTick />
                  </div>
                </IconContext.Provider>
                <p>Architectural Services</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;

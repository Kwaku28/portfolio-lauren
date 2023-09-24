import projectData from "./data/projectData";
import { motion } from "framer-motion";
import "../styles/project.css";

const Project = () => {
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

  return (
    <motion.div
      className="project-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <div className="circle"></div>
        <h2>
          <span>P</span>rojects
        </h2>
      </div>
      <div className="project-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="image">
              <img src={project.image_url} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <a href={project.url} target="_blank" rel="noreferrer">
                  View Project
                </a>
                <a href={project.source} target="_blank" rel="noreferrer">
                  View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;

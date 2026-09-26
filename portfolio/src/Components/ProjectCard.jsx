import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-buttons">

          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard; 
import React, { useState } from "react";
import "./project.component.css";
import { projects } from "./project-data";

function ProjectComponent() {
  const [filteredProjects, setFilteredTechnologies] = useState(projects);
  return (
    <>
      <div className="carousel container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="projectTitle">Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
            <sdx-content-slider lg={2} xl={2} ul={2} sr-hint="My projects">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="image--frame-light"
                  style={{ borderRadius: "25px" }}
                  role="group"
                  aria-label={`Project ${index + 1}`}
                >
                  <div className="img-container">
                    <img
                      className="image1"
                      src={project.logo}
                      alt={`${project.name} Logo`}
                    />
                  </div>
                  <div className="description-container">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project.duration && (
                      <p>
                        <strong>Duration:</strong> {project.duration}
                      </p>
                    )}
                    {project.technologies && (
                      <p>
                        <strong>Technologies:</strong> {project.technologies}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </sdx-content-slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComponent;

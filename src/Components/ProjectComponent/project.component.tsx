import React from "react";
import "./project.component.css";
import Swisscom_Logo from "../../Images/Swisscom_Logo.png";
import NexCCLogo from "../../Images/NexCCLogo.png";
import TeamAnchorman from "../../Images/TeamAnchorman.png";
import AppsteamLogo from "../../Images/AppsteamLogo.png";

function ProjectComponent() {
  return (
    <>
      <div className="carousel-container">
        <h1 className="projectTitle">Projects</h1>
        <sdx-content-slider lg={2} xl={2} ul={2} sr-hint="My projects">
          <div
            className="image--frame-light"
            style={{ borderRadius: "25px" }}
            role="group"
            aria-label="Slide 2 of 3"
          >
            <div className="img-container">
              <img className="image1" src={Swisscom_Logo} alt="Swisscom Logo" />
            </div>
            <div className="description-container">
              <h3>NEX First Steps 2022</h3>
              <p>
                In meinen ersten beiden Wochen bei Swisscom verbrachte ich Zeit
                in den ersten Schritten von Team 31 und Team 14. Dort erhielt
                ich eine Einführung in die grundlegenden Abläufe und Strukturen
                des Unternehmens.
              </p>
              <p>
                <strong>Duration:</strong> August 1, 2022 - August 12, 2022
              </p>
            </div>
          </div>

          <div
            className="image--frame-light"
            style={{ borderRadius: "25px" }}
            role="group"
            aria-label="Slide 3 of 3"
          >
            <div className="img-container">
              <img className="image1" src={NexCCLogo} alt="NexCC Logo" />
            </div>
            <div className="description-container">
              <h3>Applikationsentwickler beim NexCC</h3>
              <p>
                Das NexCC-Projekt markierte meinen Einstieg bei Swisscom.
                Innerhalb von nur einem halben Jahr erwarb ich sämtliche
                grundlegenden Technologien und Fähigkeiten, die mir den Weg als
                Applikationsentwickler ebneten.
              </p>
              <p>
                <strong>Duration:</strong> August 15, 2022 - Februar 1, 2023
              </p>
            </div>
          </div>

          <div
            className="image--frame-light"
            style={{ borderRadius: "25px" }}
            role="group"
            aria-label="Slide 3 of 3"
          >
            <div className="img-container">
              <img className="image1" src={TeamAnchorman} alt="NexCC Logo" />
            </div>
            <div className="description-container">
              <h3>Newsroom Team Anchorman - P2S</h3>
              <p>
                Im Team Anchorman arbeitete ich an Frontend und Backend der
                Applikation Newsroom. Dazu teile ich die Rolle als Product Owner
                mit Sabira Shanmugalingam. Durch diese Erfahrung habe ich
                gelernt in einem Team agil zu arbeiten und dieses zu führen.
              </p>
              <p>
                <strong>Duration:</strong> February 2, 2023 - February 1, 2024
              </p>
            </div>
          </div>

          <div
            className="image--frame-light"
            style={{ borderRadius: "25px" }}
            role="group"
            aria-label="Slide 3 of 3"
          >
            <div className="img-container">
              <img className="image1" src={AppsteamLogo} alt="NexCC Logo" />
            </div>
            <div className="description-container">
              <h3>Backend Entwickler im Apps Team</h3>
              <p>
                Im Apps-Team erwarb ich fundierte Kenntnisse im Backend-Bereich.
                Nach meinem Einstieg in NestJs und TypeScript war ich schon bald
                in der Lage, aktiv an der Entwicklung von Anwendungen
                mitzuwirken.
              </p>
              <p>
                <strong>Duration:</strong> February 5, 2024 - August 2, 2024
              </p>
            </div>
          </div>
        </sdx-content-slider>
      </div>
    </>
  );
}

export default ProjectComponent;

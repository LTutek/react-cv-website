import "./introduction.component.css";
import profilePic from "../../Images/profilePic.png";
import React, { useState, useEffect } from "react";

function IntroductionComponent() {
  const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, delay]);

    return <div className="typewriter">{currentText}</div>;
  };

  return (
    <>
      <div className="container-fluid no-gutters typeWriterContainer">
        <div className="introduction">
          <div className="col-xs flex-xs-middle col-md-6 offset-md-3">
            <Typewriter text="Hello my name is Luka Tutek" delay={100} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row card flex-items-xs-center">
          <div className="col-xs-12 col-md-4">
            <img
              className="col-xs-12 col-md-12 selfie"
              src={profilePic}
              alt="selfie"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <sdx-card label="About me :)" label-aria-level="3">
              <p>
                Hallo! Ich bin 18 Jahre alt und befinde mich im dritten Lehrjahr
                meiner Ausbildung zum Applikationsentwickler. Meine Leidenschaft
                für die Technologie und mein stetiger Drang, Neues zu lernen,
                treiben mich an. Neugierde ist eine meiner grössten Stärken –
                sie motiviert mich, ständig neue Wege zu erkunden und innovative
                Lösungen zu finden. Ich freue mich darauf, meine Fähigkeiten
                weiterzuentwickeln und spannende Projekte zu realisieren.
              </p>
            </sdx-card>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionComponent;

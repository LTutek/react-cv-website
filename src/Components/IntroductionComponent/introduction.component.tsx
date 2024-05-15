import "./introduction.component.css";
import astronaut_background from "../../Images/astronaut_background.jpg";
import selfie from "../../Images/selfie.jpeg";
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
      <div className="container-fluid no-gutters">
        <div className="row introduction">
          <div className="col-xs flex-xs-middle col-md-6 offset-md-4">
            <Typewriter text="Hello my name is Luka Tutek" delay={100} />
          </div>
        </div>

        <div className="row card">
          <div className="col-xs">
            <sdx-card
              label="Title"
              /* label-aria-level="3"
              image-src={selfie} */
              image-alt="austronaut image"
              href-label="Link"
              href-aria-label="Open new website."
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </sdx-card>
          </div>
          <div className="col-xs col-lg-4 margin-top-2">
            <img className="profile" src={astronaut_background} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionComponent;

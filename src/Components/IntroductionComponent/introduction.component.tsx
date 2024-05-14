import "./introduction.component.css";
import astronaut_background from "../../Images/astronaut_background.jpg";
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
          <div className="col-lg-6 col-xl-5 mag-5 col-md-6 offset-md-3">
            <sdx-card
              label="Title"
              label-aria-level="3"
              image-src={astronaut_background}
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
        </div>
      </div>
    </>
  );
}

export default IntroductionComponent;

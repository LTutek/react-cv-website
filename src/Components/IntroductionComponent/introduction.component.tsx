import "./introduction.component.css";
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
          <div className="col-xs flex-xs-middle col-md-6 offset-md-3">
            <Typewriter text="Hello my name is Luka Tutek" delay={100} />
          </div>
        </div>

        <div className="row card">
          <div className="col-xs-12 col-md-6 flex-xs-middle col-md-6 offset-md-3">
            <sdx-card
              label="About me :)"
              label-aria-level="3"
              image-src={selfie}
              image-alt="selfie"
              href-label="Link"
              href-aria-label="Open new website."
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, debitis exercitationem, architecto voluptatibus
                similique delectus et sapiente iusto iste, consequatur
                temporibus pariatur voluptates minima ut nam provident obcaecati
                placeat cumque!
              </p>
            </sdx-card>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionComponent;

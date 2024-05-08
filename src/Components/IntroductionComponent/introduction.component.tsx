import "./introduction.component.css";
import astronaut_background from "../../Images/astronaut_background.jpg";
function IntroductionComponent() {
  return (
    <>
      <div className="introduction-container"></div>
      <div className="cardContaienr">
        <div className="col-lg-6 col-xl-5 mag-5">
          <sdx-card
            label="Title"
            label-aria-level="3"
            image-src={astronaut_background}
            image-alt="austronaut image"
            href="javascript:;"
            href-label="Link"
            href-aria-label="Open new website."
          >
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </sdx-card>
        </div>
      </div>
    </>
  );
}

export default IntroductionComponent;

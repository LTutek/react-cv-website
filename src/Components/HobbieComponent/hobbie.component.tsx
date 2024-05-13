import "./hobbie.component.css";
function HobbieComponent() {
  return (
    <>
      <h1 className="hobbieTitle">Hobbies</h1>
      <sdx-tabs style={{ marginTop: "20px" }}>
        <sdx-tabs-item label="Fitness" icon-name="icon-fitness">
          <div className="fitness-content">
            <p className="conent-text">
              Das Fitnessstudio ist für mich ein Ort, an dem ich nach der Arbeit
              oder der Schule abschalten kann. Ich betrachte es als eine
              äusserst wichtige Freizeitaktivität.
            </p>
            <sdx-content-slider lg={1} xl={1} ul={1} sr-hint="My three slides">
              <div
                className="image--frame-light"
                style={{ height: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              ></div>

              <div
                className="image--frame-light"
                style={{ height: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              >
                Slide Content 2
              </div>

              <div
                className="image--frame-light"
                style={{ height: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              >
                Slide Content 3
              </div>
            </sdx-content-slider>
          </div>
        </sdx-tabs-item>

        <sdx-tabs-item label="Travel" icon-name="icon-suitcase">
          <div className="travel-content">
            <p className="conent-text">
              Reisen ist meine Leidenschaft, und ich strebe danach, so viele
              Orte wie möglich zu besuchen und zu erkunden.
            </p>
            <sdx-content-slider lg={1} xl={1} ul={1} sr-hint="My three slides">
              <div
                className="image--frame-light Munich"
                style={{ height: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              >
                <div className="icon-container">
                  <sdx-icon
                    icon-name="icon-map-pointer"
                    size={3}
                    sr-hint="Displays the location"
                  ></sdx-icon>
                  München
                </div>
              </div>
              <div
                className="image--frame-light London"
                style={{ height: "200px", width: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              >
                {" "}
                <div className="icon-container">
                  <sdx-icon
                    icon-name="icon-map-pointer"
                    size={3}
                    sr-hint="Displays the location"
                  ></sdx-icon>
                  St.Pauls Cathedral London
                </div>
              </div>

              <div
                className="image--frame-light CityLondon"
                style={{ height: "200px" }}
                role="group"
                aria-label="Slide 1 of 3"
              >
                {" "}
                <div className="icon-container">
                  <sdx-icon
                    icon-name="icon-map-pointer"
                    size={3}
                    sr-hint="Displays the location"
                  ></sdx-icon>
                  City of London
                </div>
              </div>
            </sdx-content-slider>
          </div>
        </sdx-tabs-item>
        <sdx-tabs-item label="Friends" icon-name="icon-crowd">
          An den Wochenenden treffe ich mich sehr gerne mit Freunden, um
          gemeinsam Zeit zu verbringen und schöne Momente zu erleben.
        </sdx-tabs-item>
        <sdx-tabs-item label="Gaming" icon-name="icon-gaming">
          In meiner Freizeit zu Hause spiele ich gerne Videospiele mit Freunden,
          um abzuschalten und Spass zu haben.
        </sdx-tabs-item>
        <sdx-tabs-item label="Reading" icon-name="icon-book">
          smth.
        </sdx-tabs-item>
      </sdx-tabs>
    </>
  );
}

export default HobbieComponent;

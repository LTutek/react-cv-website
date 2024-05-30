import "./hobbie.component.css";
function HobbieComponent() {
  return (
    <>
      <div className="hobbie container-fluid margin-top-4">
        <div className="title row col-md-6 offset-md-3 ">
          <div className="col-xl-12 col-md-6 col-lg-12 col-md-6 col-md-12 col-md-6">
            <h1 className="hobbieTitle">Hobbies</h1>
          </div>
        </div>
        <sdx-tabs theme="centered" style={{ marginTop: "20px" }}>
          <div className="row flex-items-xs-center">
            <div className="col-xs-12 col-md-6">
              <sdx-tabs-item label="Fitness" icon-name="icon-fitness">
                <div className="description">
                  <sdx-card label="Fitness" label-aria-level="2">
                    Das Fitnessstudio ist für mich ein Ort, an dem ich nach der
                    Arbeit oder der Schule abschalten kann. Ich betrachte es als
                    eine äusserst wichtige Freizeitaktivität.
                  </sdx-card>
                </div>
              </sdx-tabs-item>
            </div>
            <div className="col-xs-12 col-md-8">
              <sdx-tabs-item label="Travel" icon-name="icon-suitcase">
                <div className="description margin-bottom-3">
                  <sdx-card label="Travel" label-aria-level="2">
                    Reisen ist meine Leidenschaft, und ich strebe danach, so
                    viele Orte wie möglich zu besuchen und zu erkunden. Jedes
                    Reiseziel bietet eine einzigartige Gelegenheit, neue
                    Kulturen kennenzulernen, atemberaubende Landschaften zu
                    entdecken und unvergessliche Erfahrungen zu sammeln. Ob es
                    sich um faszinierende Städte, idyllische Strände oder
                    abenteuerliche Naturgebiete handelt, ich bin immer neugierig
                    darauf, die Vielfalt unserer Welt zu erkunden und neue
                    Horizonte zu entdecken. Das Reisen erweitert meinen
                    Horizont, bereichert mein Leben und schenkt mir kostbare
                    Erinnerungen, die mich ein Leben lang begleiten.
                  </sdx-card>
                </div>
                <div className="">
                  <sdx-content-slider
                    xs={1}
                    lg={1}
                    xl={2}
                    ul={2}
                    sr-hint="My three slides"
                  >
                    <div
                      className="image--frame-light Munich"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 1 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        München
                      </div>
                    </div>
                    <div
                      className="image--frame-light London"
                      style={{ height: "200px", width: "200px" }}
                      role="group"
                      aria-label="Slide 2 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        St.Pauls Cathedral, London
                      </div>
                    </div>

                    <div
                      className="image--frame-light CityLondon"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 3 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        City of London
                      </div>
                    </div>
                    <div
                      className="image--frame-light SvMarko"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 4 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        Sv.Marko, Zagreb
                      </div>
                    </div>
                    <div
                      className="image--frame-light Zadar"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 5 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        Zadar
                      </div>
                    </div>
                    <div
                      className="image--frame-light Rovinj"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 6 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-map-pointer"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        Rovinj
                      </div>
                    </div>
                  </sdx-content-slider>
                </div>
              </sdx-tabs-item>
            </div>

            <div className="col-xs-12 col-md-6">
              <sdx-tabs-item label="Friends" icon-name="icon-crowd">
                <div className="description">
                  <sdx-card label="Friends" label-aria-level="2">
                    An den Wochenenden treffe ich mich sehr gerne mit Freunden,
                    um gemeinsam Zeit zu verbringen und schöne Momente zu
                    erleben. Wir unternehmen verschiedene Aktivitäten zusammen,
                    wie zum Beispiel Ausflüge in die Natur oder gemeinsam in
                    Restaurants essen. Es ist eine Zeit, in der wir uns
                    gegenseitig unterstützen, uns austauschen und einfach Spass
                    haben können. Diese Momente stärken unsere Freundschaft und
                    sind wichtige Erholungsphasen nach einer arbeitsreichen
                    Woche.
                  </sdx-card>
                </div>
              </sdx-tabs-item>
            </div>
            <div className="col-xs-12 col-md-8">
              <sdx-tabs-item label="Gaming" icon-name="icon-gaming">
                <div className="description margin-bottom-3">
                  <sdx-card label="Gaming" label-aria-level="2">
                    In meiner Freizeit zu Hause spiele ich gerne Videospiele mit
                    Freunden, um abzuschalten und Spass zu haben. Es ist eine
                    Gelegenheit, gemeinsam in virtuelle Welten einzutauchen,
                    Herausforderungen zu meistern und Erfolge zu feiern. Es ist
                    immer wieder aufregend, neue Spiele auszuprobieren oder
                    bekannte Titel gemeinsam zu erkunden. Durch das gemeinsame
                    Spielen entstehen oft lustige und unvergessliche Erlebnisse,
                    die unsere Freundschaft weiter vertiefen.
                  </sdx-card>
                </div>
                <div className="">
                  <sdx-content-slider
                    xs={1}
                    lg={1}
                    xl={2}
                    ul={2}
                    sr-hint="My three slides"
                  >
                    <div
                      className="image--frame-light Mc1"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 1 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-game"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        MINECRAFT
                      </div>
                    </div>
                    <div
                      className="image--frame-light valorant"
                      style={{ height: "200px", width: "200px" }}
                      role="group"
                      aria-label="Slide 2 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-game"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        VALORANT
                      </div>
                    </div>

                    <div
                      className="image--frame-light helldivers"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 3 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-game"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        HELLDIVERS II
                      </div>
                    </div>
                    <div
                      className="image--frame-light ac"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 4 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-game"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        ASSAISINS CREED
                      </div>
                    </div>
                    <div
                      className="image--frame-light hoi4"
                      style={{ height: "200px" }}
                      role="group"
                      aria-label="Slide 5 of 6"
                    >
                      <div className="icon-container">
                        <sdx-icon
                          icon-name="icon-game"
                          size={2}
                          sr-hint="Displays the location"
                        ></sdx-icon>
                        HOI4
                      </div>
                    </div>
                  </sdx-content-slider>
                </div>
              </sdx-tabs-item>
            </div>
            <div className="col-xs-12 col-md-6">
              <sdx-tabs-item label="Reading" icon-name="icon-book">
                <div className="description">
                  <sdx-card label="Reading" label-aria-level="2">
                    Ich lese nicht so oft, wie ich es gerne hätte. Jedoch ist
                    diese Aktivität für mich eine Möglichkeit, von digitalen
                    Medien wegzukommen und in eine andere Welt einzutauchen.
                  </sdx-card>
                </div>
              </sdx-tabs-item>
            </div>
          </div>
        </sdx-tabs>
      </div>
    </>
  );
}

export default HobbieComponent;

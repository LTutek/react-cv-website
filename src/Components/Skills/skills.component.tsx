import LanguageComponent from "../LanguageComponent/language.component";
import TechnologyComponent from "../TechnologyComponent/technology.component";

function SkillComponent() {
  return (
    <>
      <div className="contaienr skills margin-top-4">
        <div className="title row col-md-6 offset-md-3">
          <div className="col-md-6 offset-md-3">
            <h1 className="hobbieTitle">Skills</h1>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-xs-12">
            <sdx-tabs theme="centered" style={{ marginTop: "20px" }}>
              <sdx-tabs-item label="Technologies" icon-name="icon-console">
                <TechnologyComponent />
              </sdx-tabs-item>
              <sdx-tabs-item label="Language" icon-name="icon-translation">
                <LanguageComponent />
              </sdx-tabs-item>
            </sdx-tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillComponent;

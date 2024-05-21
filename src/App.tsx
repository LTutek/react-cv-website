import "./App.css";
import ProjectComponent from "./Components/ProjectComponent/project.component";
import HeaderComponent from "./Components/HeaderComponent/header.component";
import TechnologyComponent from "./Components/TechnologyComponent/technology.component";
import IntroductionComponent from "./Components/IntroductionComponent/introduction.component";
import HobbieComponent from "./Components/HobbieComponent/hobbie.component";

function App() {
  return (
    <>
      <HeaderComponent />
      <IntroductionComponent />
      <div className="project-container margin-3">
        <ProjectComponent />
      </div>
      <div className="hobbie-container margin-3">
        <HobbieComponent />
      </div>
      <TechnologyComponent />
    </>
  );
}

export default App;

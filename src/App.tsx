import "./App.css";
import ProjectComponent from "./Components/ProjectComponent/project.component";
import HeaderComponent from "./Components/HeaderComponent/header.component";
import IntroductionComponent from "./Components/IntroductionComponent/introduction.component";
import HobbieComponent from "./Components/HobbieComponent/hobbie.component";
import SkillComponent from "./Components/Skills/skills.component";

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
      <SkillComponent />
    </>
  );
}

export default App;

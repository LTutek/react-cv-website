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
      <ProjectComponent />
      <HobbieComponent />
      <SkillComponent />
    </>
  );
}

export default App;

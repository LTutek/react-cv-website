import "./App.css";
import ProjectComponent from "./Components/ProjectComponent/project.component";
import HeaderComponent from "./Components/HeaderComponent/header.component";
import HobbieComponent from "./Components/HobbieComponent/hobbie.component";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="project-container margin-3">
        <ProjectComponent />
      </div>
      <div className="hobbie-container margin-3">
        <HobbieComponent />
      </div>
    </>
  );
}

export default App;

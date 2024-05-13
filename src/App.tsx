import "./App.css";
import ProjectComponent from "./Components/ProjectComponent/project.component";
import HeaderComponent from "./Components/HeaderComponent/header.component";
import HobbieComponent from "./Components/HobbieComponent/hobbie.component";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="project-contaienr" style={{ margin: "10px" }}>
        <ProjectComponent />
      </div>
      <div
        className="hobbie-container"
        style={{
          margin: "10px",
        }}
      >
        <HobbieComponent />
      </div>
    </>
  );
}

export default App;

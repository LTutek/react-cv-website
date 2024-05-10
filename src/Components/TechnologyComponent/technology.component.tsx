import { useEffect, useState } from "react";
import { technologies } from "./technology-data";
import "./technology.component.css";

function TechnologyComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");
  const [filteredTechnologies, setFilteredTechnologies] =
    useState(technologies);

  useEffect(() => {
    const filterTechnologies = () => {
      const filtered = technologies.filter((tech) =>
        tech.category.includes(selectedCategory)
      );
      setFilteredTechnologies(filtered);
    };

    filterTechnologies();
  }, [selectedCategory]);

  const handleCategoryChange = (
    event: React.FormEvent<HTMLSdxInputGroupElement>
  ) => {
    const target = event.target as HTMLInputElement;
    setSelectedCategory(target.value);
  };

  return (
    <>
      <sdx-input-group
        type="radio"
        inline
        onInput={handleCategoryChange}
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <sdx-input-item
          value="frontend"
          checked={selectedCategory === "frontend"}
        >
          Frontend
        </sdx-input-item>
        <sdx-input-item
          value="backend"
          checked={selectedCategory === "backend"}
        >
          Backend
        </sdx-input-item>
        <sdx-input-item value="tools" checked={selectedCategory === "tools"}>
          Tools
        </sdx-input-item>
      </sdx-input-group>
      <div className="technology-container">
        {filteredTechnologies.map((technology, index) => (
          <div key={index} className="technologyCards">
            <img
              src={technology.logo}
              alt={technology.name}
              className="technologyImage"
            />
            <div className="technologyContent">
              <h3>{technology.name}</h3>
              <p>{technology.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechnologyComponent;

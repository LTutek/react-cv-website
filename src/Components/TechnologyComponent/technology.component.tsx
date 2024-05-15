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
      <div className="conatainer technology margin-top-3">
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
        <div className="row flex-items-xs-center flex-items-xs-center">
          {filteredTechnologies.map((technology, index) => (
            <div className="col-xs-12 col-md-3 margin-2">
              <sdx-card
                object-fit="contain"
                label={technology.name}
                label-aria-level="3"
                image-src={technology.logo}
                image-alt={technology.name}
                href="javascript:;"
                href-label="Link"
                href-aria-label="Open new website."
              >
                <p>{technology.description}</p>
              </sdx-card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechnologyComponent;

import { projects } from "../public/datas";

function Projects() {
  return (
    <>
      {/* Projects */}
      <div id="projects" className="w3-container w3-padding-32">
        <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h2>
      </div>
      <div className="w3-row-padding">
        {projects.map((item) => (
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                {item.title}
              </div>
              <img
                src={item.image}
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;

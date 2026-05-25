import { people } from "../public/datas";

function About() {
  return (
    <>
      {/* About */}
      <div id="about" className="w3-container w3-padding-32">
        <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="w3-row-padding w3-grayscale">
        {people.map((item) => (
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%" }}
            />
            <h3>{item.fullName}</h3>
            <p className="w3-opacity">{item.title}</p>
            <p>
              {item.info}
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        
        <p className="about-lead">
          I engineer <span className="highlight">resilient, scalable software</span> with a relentless focus on high-performance systems and seamless user experiences.
        </p>
        
        <p>
          Beyond the code, I'm a competitive <span className="highlight-alt">squash player</span> and deeply passionate about <span className="highlight-alt">national security & geopolitics</span>. These interests instill strategic thinking, discipline, and a long-term perspective into my technical approach.
        </p>
        
        <p>
          Whether I'm optimizing complex backend pipelines, scaling full-stack applications, or unwinding by stargazing and playing the harmonica, I thrive on <span className="highlight">curiosity, persistence, and continuous growth</span>.
        </p>
      </div>
    </div>
  );
};

export default About;

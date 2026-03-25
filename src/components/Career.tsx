import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (IoT)</h4>
                <h5>Shiv Nadar University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Relevant Coursework: Data Structures, Database Management, Java Programming, and Machine Learning. CGPA: 7.85
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Intern</h4>
                <h5>PearlThoughts</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered 4 core healthcare modules with 15+ RESTful API endpoints, including appointment scheduling. Integrated JWT authentication and Bcrypt hashing for secure, HIPAA-compliant data handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Engineer</h4>
                <h5>Shiv Nadar University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected 2 full-stack applications using Java, Spring Boot, and React from concept to deployment. Led backend development for a team of 4, delivering 100% of features ahead of sprint deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import "./styles/Certificates.css";

const certificatesData = [
  // Java
  { title: "Programming in Java", issuer: "IIT Kharagpur", file: "Programming In Java.pdf" },
  { title: "Java Masterclass 2025", issuer: "130 Hours of Expert Lessons", file: "Java Masterclass 2025 130 Hours of Expert Lessons.pdf" },
  { title: "Complete Java Guide", issuer: "Programming with Examples", file: "A Complete Guide to Java Programming with Examples.pdf" },

  // Databases & DevOps
  { title: "Docker Deep Dive", issuer: "Build, Ship, and Run Containers", file: "Docker Deep Dive Build, Ship, and Run Containers.pdf" },
  { title: "MongoDB Professional", issuer: "Diploma in MongoDB", file: "MongoDB Professional Certification Diploma in MongoDB.pdf" },
  { title: "SQL & MySQL Database", issuer: "Design and Data Analysis", file: "Understand SQL using the MySQL database. Learn Database Design and Data Analysis with Normalization and Relationships.pdf" },

  // Web & Languages
  { title: "JavaScript", issuer: "10 Projects in 10 Days", file: "JavaScript 10 Projects in 10 Days.pdf" },
  { title: "HTML and CSS", issuer: "Modern Web Design", file: "HTML and CSS.pdf" },
  { title: "Go Lang", issuer: "Complete Backend Guide", file: "Go Lang Certificate.pdf" },

  // AI & Prompt Engineering
  { title: "Building AI Agents", issuer: "Custom GPTs", file: "Building Basic AI Agents and Custom GPTs.pdf" },
  { title: "Llama 4 AI", issuer: "Prompt Engineering", file: "Llama 4 AI Mastering Prompt Engineering.pdf" },
  { title: "AI for Product Management", issuer: "Innovation Strategy", file: "AI for Product Management & Innovation.pdf" },

  // Leadership & Specialized
  { title: "Leadership & Team Effectiveness", issuer: "IIT Roorkee", file: "Leadership and Team Effectiveness.pdf" },
  { title: "Contemporary Teams", issuer: "IIT Hyderabad", file: "Working in Contemporary Teams.pdf" },
  { title: "Ethical Hacking", issuer: "IIT Kharagpur", file: "Ethical Hacking.pdf" },
  { title: "MS Excel Masterclass", issuer: "Job Seekers Success", file: "MS Excel Masterclass for Job Seekers Accounting Success.pdf" },
];

const Certificates = () => {
  return (
    <div className="certificates-section section-container" id="Certificates">
      <div className="certificates-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="certificates-info">
          {certificatesData.map((cert, index) => (
            <a 
              key={index}
              href={`/certificates/${cert.file}`} 
              target="_blank" 
              rel="noreferrer" 
              className="certificate-box"
            >
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

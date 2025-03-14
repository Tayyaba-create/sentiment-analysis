// src/pages/About/About.jsx
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      task: "NLP Model Integration & Backend",
    },
    {
      name: "Jane Smith",
      role: "Frontend Architect",
      task: "UI/UX Design & Dashboard Implementation",
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      task: "Sentiment Analysis Algorithms",
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      task: "Client Requirements & Deployment",
    },
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-task">{member.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

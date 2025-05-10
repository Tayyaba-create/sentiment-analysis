// src/pages/About/About.jsx
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Ammar Vohra",
      role: "Team Lead",
      task: "Data pipeline development & preprocessing optimization",
    },
    {
      name: "Eman Fatima",
      role: "Frontend Architect",
      task: "Responsive UI/UX design & interactive component development",
    },
    {
      name: "Tayyaba Faisal ",
      role: "Model Training",
      task: "Sentiment Analysis Algorithms",
    },
    {
      name: "Muhammad Hassan",
      role: "Backend & Integration",
      task: "NLP Model Integration & Backend",
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

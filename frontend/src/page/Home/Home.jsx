// src/page/Home/Home.jsx
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>AI-Powered Sentiment Prediction</h1>
        <div className="content">
          <p className="description">
            Instantly analyze and predict the sentiment of any text or review. 
            Get AI-driven insights to understand opinions, feedback, and customer emotions effortlessly.
          </p>
          <div className="features">
            <div className="feature-card">
              <h3>Instant Sentiment Analysis</h3>
              <p>Enter any text and get real-time sentiment predictions.</p>
            </div>
            <div className="feature-card">
              <h3>Confidence Score</h3>
              <p>Receive a confidence level with each prediction for better accuracy.</p>
            </div>
            <div className="feature-card">
              <h3>Simple & Fast</h3>
              <p>Easy-to-use interface for quick sentiment evaluation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

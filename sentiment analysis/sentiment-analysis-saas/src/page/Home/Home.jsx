// src/page/Home/Home.jsx
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>AI-Powered Sentiment Analysis & Market Research</h1>
        <div className="content">
          <p className="description">
            Transform your business with real-time sentiment analysis across
            social media, news articles, and customer reviews. Gain actionable
            insights to drive data-driven decisions and enhance customer
            satisfaction.
          </p>
          <div className="features">
            <div className="feature-card">
              <h3>Real-time Analysis</h3>
              <p>Instant sentiment tracking across multiple platforms</p>
            </div>
            <div className="feature-card">
              <h3>Predictive Analytics</h3>
              <p>AI-powered trend forecasting and consumer insights</p>
            </div>
            <div className="feature-card">
              <h3>Custom Reports</h3>
              <p>Automated report generation with actionable metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

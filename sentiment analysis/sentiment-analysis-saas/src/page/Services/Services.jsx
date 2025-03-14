// src/page/Services/Services.jsx
import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalysis = async () => {
    // Add your API integration here
    setResult({
      sentiment: "Positive",
      confidence: "92%",
      keywords: ["excellent", "happy", "satisfied"],
    });
  };

  return (
    <div className="services-container">
      <div className="analysis-box">
        <h2>Sentiment Analysis Tool</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text for analysis..."
          rows="6"
        />
        <button onClick={handleAnalysis}>Analyze Text</button>

        {result && (
          <div className="result-box">
            <h3>Analysis Result:</h3>
            <div className="result-item">
              <span>Sentiment:</span>
              <span className="result-value">{result.sentiment}</span>
            </div>
            <div className="result-item">
              <span>Confidence:</span>
              <span className="result-value">{result.confidence}</span>
            </div>
            <div className="result-item">
              <span>Key Phrases:</span>
              <div className="keywords">
                {result.keywords.map((word, index) => (
                  <span key={index} className="keyword">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

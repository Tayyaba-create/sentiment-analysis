🧠 SentimentSphere AI – Transformer-Based Sentiment Analysis Platform

SentimentSphere AI is an advanced AI-driven sentiment analysis application that leverages Deep Learning and Natural Language Processing (NLP) to predict the sentiment polarity (positive or negative) of textual input.
Built with a Flask + FastAPI backend and a React (Vite) frontend, it provides real-time, accurate, and interpretable sentiment predictions powered by state-of-the-art transformer models such as BERT and RoBERTa.

🚀 Features

✅ Predicts sentiment (positive/negative) using transformer-based deep learning models
✅ Real-time interaction through a React-powered frontend
✅ Integrated Flask REST API for inference and FastAPI for scalable deployment
✅ Advanced NLP preprocessing: stopword removal, tokenization, lemmatization, and text normalization
✅ Utilizes embeddings from BERT and RoBERTa for contextual understanding
✅ Achieved ~85% accuracy on benchmark Kaggle dataset
✅ Containerized deployment with Docker and cloud scalability via AWS

🧠 How It Works

User Input: A sentence or paragraph is entered via the web interface.

Preprocessing: Text is cleaned, tokenized, and lemmatized using spaCy and NLTK.

Embedding: Contextual embeddings are generated using Transformers (BERT / RoBERTa).

Model Inference: Deep learning models built with TensorFlow/Keras predict the sentiment.

Frontend Display: The React UI displays the result (Positive / Negative) along with confidence scores.

📊 Dataset & Model Training

Dataset sourced from Kaggle sentiment analysis corpus.

Conducted Exploratory Data Analysis (EDA) to identify class balance, frequent terms, and sentiment distribution.

Preprocessing applied: stopword removal, lowercasing, tokenization, lemmatization, and punctuation cleaning.

Trained and fine-tuned BERT and RoBERTa models for sentiment classification.

Achieved ~85% validation accuracy with optimized hyperparameters.

🧩 Tech Stack

AI & Machine Learning: TensorFlow, Keras, Scikit-Learn, Transformers (BERT, RoBERTa)
NLP & Data Processing: spaCy, NLTK, NumPy, Pandas
Backend: Python, Flask, FastAPI
Frontend: React (Vite + Tailwind CSS)
Deployment: Docker, AWS (Cloud Deployment), Uvicorn
Dataset: Kaggle Sentiment Dataset

⚙️ Installation & Setup
🧩 Backend Setup
# Clone the repository
git clone https://github.com/Tayyaba-create/sentiment-analysis.git
cd sentiment-analysis/backend

2. Create and activate a virtual environment
python -m venv venv source venv/bin/activate # On Windows: venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Run the flask app
python app.py

Frontend (React)
1. Navigate to the frontend directory:
cd frontend

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

🔮 Future Improvements

Integrate LLaMA or GPT-based models for enhanced contextual analysis

Deploy fully on AWS Lambda or Render for serverless scalability

Add real-time sentiment tracking from social media streams (Twitter API)

Implement multilingual sentiment detection

Introduce visual analytics dashboard for trend visualization

📌 Project Highlights

Combines traditional ML + modern transformer architectures

Demonstrates strong understanding of end-to-end AI application development

Modular design for easy model upgrades and cloud deployment

Ideal as a foundation for AI-powered customer feedback analysis, review classification, or social media monitoring


⭐ Developed by: Tayyaba Faisal

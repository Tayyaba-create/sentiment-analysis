from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


# Get the base directory of the backend
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Define the correct paths for model files
vectorizer_path = os.path.join(BASE_DIR, "models", "vectorizer.pkl")
model_path = os.path.join(BASE_DIR, "models", "model.pkl")


# Load the vectorizer
with open(vectorizer_path, "rb") as vec_file:
    vectorizer = pickle.load(vec_file)

# Load the model
with open(model_path, "rb") as model_file:
    model = pickle.load(model_file)


    
@app.route("/review_prediction", methods=["POST"])
def review_prediction():
    try:
        data = request.get_json()
        review = data.get("review", "").strip()

        if not review:
            return jsonify({"sentiment": "Please enter a valid review.", "confidence": None})

        # Preprocess & predict
        review_vectorized = vectorizer.transform([review])
        prediction = model.predict(review_vectorized)[0]

        # Get probability scores (for models that support it)
        probabilities = model.predict_proba(review_vectorized)

        # Get confidence score for the predicted class
        confidence_score = max(probabilities[0])  # Get max probability

        sentiment = "Positive" if prediction == 2 else "Negative"
        return jsonify({"sentiment": sentiment, "confidence": round(confidence_score, 2)})

    except Exception as e:
        return jsonify({"sentiment": "Error processing request", "confidence": None, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allows your frontend (e.g., localhost:5173) to connect

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # Dummy logic for prediction (replace with your ML model later)
        glucose = float(data.get("Glucose", 0))
        prediction = "Diabetic" if glucose > 125 else "Non-Diabetic"

        gif_url = (
            "https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
            if prediction == "Diabetic"
            else "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
        )

        return jsonify({
            "prediction": f"Prediction: {prediction}",
            "gif_url": gif_url
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)


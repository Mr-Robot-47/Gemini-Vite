import os
import sys
from dotenv import load_dotenv
import google.generativeai as genai
from flask import Flask, request, Response, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def api_key():
    load_dotenv()
    key = os.getenv("API_KEY")
    if not key:
        raise EnvironmentError("Missing API_KEY in environment.")
    return key

from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
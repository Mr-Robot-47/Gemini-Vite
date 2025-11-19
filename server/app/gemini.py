import os
from dotenv import load_dotenv
import google.generativeai as genai


def get_api_key():
    load_dotenv()
    key = os.getenv("API_KEY")
    if not key:
        raise EnvironmentError("Missing API_KEY in environment.")
    return key


def get_model():
    genai.configure(api_key=get_api_key())
    return genai.GenerativeModel("gemini-2.5-flash-lite")


def generate_stream(prompt):
    m = get_model()
    m.start_chat()
    for chunk in m.generate_content(prompt, stream=True):
        yield chunk.text

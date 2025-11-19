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


def generate_stream(prompt, image=None):
    m = get_model()
    m.start_chat()
    content = {"parts": [prompt]}
    if image is not None:
        content["parts"].append({"inline_data": {"mime_type": "image/jpeg", "data": image}})
    for chunk in m.generate_content(content, stream=True):
        yield chunk.text

import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("Missing API_KEY in environment. Add it to your .env or pass the correct key name.")

genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.5-flash-lite")

def stream_content():
    response = model.start_chat()
    stream = model.generate_content(
        "Do you know horcruxes",
        stream=True,
    )
    for chunk in stream:
        print(chunk.text, end="", flush=True)

if __name__ == "__main__":
    stream_content()
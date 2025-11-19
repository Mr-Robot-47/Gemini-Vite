from flask import Blueprint, request, Response, jsonify
from .gemini import generate_stream

bp = Blueprint('main', __name__)

@bp.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    image = data.get('image')
    if not prompt:
        return jsonify({'error': 'Missing prompt'}), 400
    return Response(generate_stream(prompt, image=image), mimetype='text/plain')

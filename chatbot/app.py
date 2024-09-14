from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set up OpenAI API key (replace with your actual OpenAI API key)
openai.api_key = 'OPENAI_APIKEY'

# Route to serve the chat app (index.html)
@app.route('/')
def index():
    return render_template('indi.html')

# Route to handle POST requests to /api
@app.route('/api', methods=['POST'])
def chat_api():
    data = request.get_json()  # Get the JSON data from the POST request
    user_message = data.get('message')

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    # Create a conversation history with the user message
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},  # System prompt (context)
        {"role": "user", "content": user_message}  # User's input
    ]

    # Call GPT-3.5 Turbo
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=150  # Limit the number of tokens in the response
        )

        # Extract the response text from GPT-3.5 Turbo
        ai_message = response['choices'][0]['message']['content'].strip()

        # Return the AI response
        return jsonify({"response": ai_message})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

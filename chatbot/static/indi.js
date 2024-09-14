document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message === '') {
        alert("Please enter a message.");
        return;
    }

    // Clear the input field after sending the message
    messageInput.value = '';

    // Display user's message in the chat box
    displayMessage('You', message);

    // Send the message to the Flask API
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.response) {
            displayMessage('ChatGPT', data.response);
        } else {
            displayMessage('Error', 'Failed to get a response from the server.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error', 'An error occurred while contacting the server.');
    });
}

function displayMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);

    // Auto scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

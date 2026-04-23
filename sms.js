document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('smsForm');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const statusMessage = document.getElementById('statusMessage');

    // 1. Real-time Character Counter
    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCount.textContent = currentLength;

        // Visual warning if close to limit
        if (currentLength >= 150) {
            charCount.style.color = '#dc3545'; // Red color
        } else {
            charCount.style.color = '#888';
        }
    });

    // 2. Form Submission Handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from the form
        const rawRecipients = document.getElementById('recipients').value;
        const message = messageInput.value;
        const apiKey = document.getElementById('apiKey').value;

        // Process recipients (split by comma and remove whitespace)
        const recipientList = rawRecipients.split(',')
            .map(number => number.trim())
            .filter(number => number.length > 0);

        // Basic validation
        if (recipientList.length === 0) {
            showStatus('Please enter at least one recipient number.', 'error');
            return;
        }

        if (!apiKey) {
            showStatus('Please enter your Hubtel API Key.', 'error');
            return;
        }

        // Show "Sending" state
        showStatus('Broadcasting message...', 'info');

        // Logic placeholder: This is where the 'fetch' call to your backend goes
        console.log("--- Sending to API ---");
        console.log("Recipients Array:", recipientList);
        console.log("Message Content:", message);
        console.log("Hubtel API Key:", apiKey);

        // Simulate a successful response
        setTimeout(() => {
            showStatus('Success! Message broadcasted to ' + recipientList.length + ' recipients.', 'success');
        }, 1500);
    });

    // 3. Helper function to show status messages
    function showStatus(text, type) {
        statusMessage.style.display = 'block';
        statusMessage.textContent = text;
        
        // Dynamic coloring based on type
        if (type === 'success') {
            statusMessage.style.backgroundColor = '#d4edda';
            statusMessage.style.color = '#155724';
            statusMessage.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            statusMessage.style.backgroundColor = '#f8d7da';
            statusMessage.style.color = '#721c24';
            statusMessage.style.border = '1px solid #f5c6cb';
        } else {
            statusMessage.style.backgroundColor = '#d1ecf1';
            statusMessage.style.color = '#0c5460';
            statusMessage.style.border = '1px solid #bee5eb';
        }
    }
});

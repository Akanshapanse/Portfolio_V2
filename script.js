document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  /*Prevent form submission */
    var formData = new FormData(this);

    /* Example: Send form data to a server using fetch API */
    fetch('https://example.com/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            // Optionally reset form fields after successful submission
            document.getElementById('contactForm').reset();
        } else {
            alert('Error sending message!');
        }
    })
    .catch(error => console.error('Error:', error));
});
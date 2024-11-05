document.getElementById('christmasForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents immediate submission

    const speechBubble = document.getElementById('speechBubble');
    speechBubble.style.display = 'block';

    // Wait for 10 seconds before submitting
    setTimeout(() => {
        // Get form data
        const name = document.getElementById('name').value;
        const wishlist = document.getElementById('wishlist').value;
        const email = this.getAttribute('data-email'); // Retrieve email from data attribute

        // Use EmailJS to send the email
        emailjs.send("service_f264hgg", "template_2g72pr7", {
            to_email: email,
            user_name: name,
            user_wishlist: wishlist
        })
        .then((response) => {
            alert('Your wishlist has been sent to Santa!');
            // Reset form after successful submission
            document.getElementById('christmasForm').reset();
            speechBubble.style.display = 'none';
        }, (error) => {
            alert('Failed to send your wishlist. Please try again.');
            console.log('Failed to send email:', error);
        });
    }, 10000); // 10-second delay
});

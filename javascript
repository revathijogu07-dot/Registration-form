// Get form and message elements
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventName = document.getElementById("event").value;

    // Validate phone number (10 digits)
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Display success message
    message.innerHTML = `
        <h3 style="color:green;">Registration Successful!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Event:</strong> ${eventName}</p>
    `;

    // Clear the form
    form.reset();
});

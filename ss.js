document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button
    const submitButton = document.getElementById("submit");

    // Add event listener for the submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const email = document.querySelector(".input-field[type='text']").value;
        const password = document.querySelector(".input-field[type='password']").value;

        // Check if the email and password match the specific values
        if (email === "email" || email === "nimsara" && password === "password" || password === "kavya") {
            // Redirect to the leave.html page
            window.location.href = "leave.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});

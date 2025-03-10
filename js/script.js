// Ensure JavaScript runs only after the page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Event (Preventing Default for now)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }

    // Debugging: Log a message when the script runs
    console.log("JS execution completed!");
});

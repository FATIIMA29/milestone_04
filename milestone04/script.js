// Select the form and display elements
var resumeForm = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resume-display');
// Function to generate and display the resume
var generateResume = function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get values from the input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create a resume string
    var resume = "\n        <h2><b>Editable Resume</b></h2>\n        <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the resume
    resumeDisplay.innerHTML = resume;
};
// Add event listener to the form
resumeForm.addEventListener('submit', generateResume);

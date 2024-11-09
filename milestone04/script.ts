
// Select the form and display elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Function to generate and display the resume
const generateResume = (event: Event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from the input fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create a resume string
    const resume = `
        <h2><b>Editable Resume</b></h2>
        <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
        <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
        <p><strong>Phone Number:</strong><span contenteditable="true"> ${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the resume
    resumeDisplay.innerHTML = resume;
};

// Add event listener to the form
resumeForm.addEventListener('submit', generateResume);

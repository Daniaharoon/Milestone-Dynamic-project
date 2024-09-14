//const form = document.getElementById('resume-form') as HTMLFormElement;
var form = document.getElementById('resume-form');
var resumeDisplayItem = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n<h2><strong>Resume</strong></h2>\n<h3><strong>PersonalInformation</strong></h3>\n<p><strong>Name:</strong> ".concat(name, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n<p><strong>Phone:</strong> ").concat(phone, "</p>\n\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience:</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills:</h3>\n<p>").concat(skills, "</p>\n");
    if (resumeDisplayItem) {
        resumeDisplayItem.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});

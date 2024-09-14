    
//const form = document.getElementById('resume-form') as HTMLFormElement;
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayItem = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit' , (event:Event) => {
        event.preventDefault();


const name =(document.getElementById('name') as HTMLInputElement).value
const email =(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('phone') as HTMLInputElement).value
const education =(document.getElementById('education') as HTMLInputElement).value
const experience =(document.getElementById('experience') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value

const resumeHtml = `
<h2><strong>Resume</strong></h2>
<h3><strong>PersonalInformation</strong></h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>

<h3>Education:</h3>
<p>${education}</p>

<h3>Experience:</h3>
<p>${experience}</p>

<h3>Skills:</h3>
<p>${skills}</p>
`;

if(resumeDisplayItem){
        resumeDisplayItem.innerHTML = resumeHtml;
}
else{
        console.error('The resume display element is missing');
}

});
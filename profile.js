const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const editor = EDITORS.find(e => e.id === id);

if (!editor) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px'>Editor Not Found</h2>";
    throw new Error("Editor Not Found");
}

// Page Title
document.title = `${editor.name} | EditSetu`;

// Avatar
const avatar = document.getElementById("avatar");
avatar.innerHTML = editor.initials;
avatar.style.background = editor.avatarBg;

// Name
document.getElementById("editorName").textContent = editor.name;

// Category
document.getElementById("editorCategory").textContent = editor.category;

// Rating
const ratingBox = document.getElementById("editorRating");

if(editor.reviews > 0){

ratingBox.innerHTML = `
<i class="fas fa-star"></i>
${editor.rating} (${editor.reviews} Reviews)
`;

}else{

ratingBox.innerHTML = `
No Reviews Yet
`;

}

// About
document.getElementById("editorAbout").textContent =
editor.about || "No description available.";

// Price
document.getElementById("editorPrice").textContent =
editor.price;

// Experience
const exp = document.getElementById("experienceList");

exp.innerHTML = "";

if(editor.experiencePoints){

editor.experiencePoints.forEach(item=>{

exp.innerHTML += `<p>✔ ${item}</p>`;

});

}

// Skills
const skills = document.getElementById("skillsList");

skills.innerHTML = "";

if(editor.skills){

editor.skills.forEach(skill=>{

skills.innerHTML += `<span>${skill}</span>`;

});

}

// Services
const services = document.getElementById("servicesList");

services.innerHTML = "";

if(editor.services){

editor.services.forEach(service=>{

services.innerHTML += `<span>${service}</span>`;

});

}

// Portfolio
const portfolio = document.getElementById("portfolioList");

portfolio.innerHTML = "";

if(editor.portfolio){

editor.portfolio.forEach(item=>{

portfolio.innerHTML += `
<a href="#" class="portfolio-card">

<div class="portfolio-thumb">

<i class="fas fa-play"></i>

</div>

<div class="portfolio-content">

<h3>${item.title}</h3>

<p>${item.desc}</p>

</div>

</a>
`;

});

}

// WhatsApp

document.getElementById("whatsappBtn").href =
`https://wa.me/${editor.phone}?text=Hi ${encodeURIComponent(editor.name)}, I found your profile on EditSetu.`;

function makePage () {
const container = document.getElementById('content');
container.classList.add("container");
// Header
// create header elements
const header= document.createElement("div");
const logoContainer= document.createElement("div");
const nav= document.createElement("ul");
const navElement1= document.createElement("li"); 
const navElement2= document.createElement("li"); 
const navElement3= document.createElement("li");
// add nav elements text content
navElement1.textContent= 'Home';
navElement2.textContent= 'Menu';
navElement3.textContent= 'Contact'; 
// add classes and id's to header elements
header.classList.add('header');
logoContainer.classList.add('logo');
nav.classList.add('nav');
navElement1.setAttribute('id', 'home');
navElement2.setAttribute('id', 'menu');
navElement3.setAttribute('id', 'contact');
// append the header elements to the container
nav.appendChild(navElement1);
nav.appendChild(navElement2);
nav.appendChild(navElement3);
header.appendChild(logoContainer);
header.appendChild(nav);
container.appendChild(header);
// Body
// create body elements
const bodyContainer= document.createElement("div");
const paraContainer= document.createElement("div");
const para= document.createElement("p");
const paraBtn= document.createElement("button");
// add classes to body elements
bodyContainer.classList.add('body-container');
paraContainer.classList.add('para-container');
para.classList.add('para');
paraBtn.classList.add('para-btn');
// add text to body elements
para.textContent = 'The most delicious place on the Internet!';
paraBtn.textContent = 'Order now';
// append the body elements to the container
paraContainer.appendChild(para);
paraContainer.appendChild(paraBtn);
bodyContainer.appendChild(paraContainer);
container.appendChild(bodyContainer);
// Footer
// create footer elements
const footer= document.createElement("footer");
const footerElement= document.createElement("div");
// add classes to footer elements
footer.classList.add('footer');
footerElement.classList.add('contact-us');
// add footer text content
footerElement.textContent= 'Contact us';
// append the footer elements to the container
footer.appendChild(footerElement);
container.appendChild(footer);
}

export default makePage;
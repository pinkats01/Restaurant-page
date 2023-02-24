
import makePage  from "./page-load";
import makeMenu from "./menu";
import makeContact from "./contact";
import '../style/style.css';


const container = document.getElementById('content');
// Header
// create header elements
const header= document.createElement("div");
const logoContainer= document.createElement("div");
const nav= document.createElement("ul");
const homeBtn= document.createElement("li"); 
const menuBtn= document.createElement("li"); 
const contactBtn= document.createElement("li");
// add nav elements text content
homeBtn.textContent= 'Home';
menuBtn.textContent= 'Menu';
contactBtn.textContent= 'Contact'; 
// add classes to header elements
header.classList.add('header');
logoContainer.classList.add('logo');
nav.classList.add('nav');
homeBtn.setAttribute('id', 'home');
menuBtn.setAttribute('id', 'menu');
contactBtn.setAttribute('id', 'contact');
// append the header elements to the container
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
header.appendChild(logoContainer);
header.appendChild(nav);
container.insertAdjacentElement("beforebegin", header);
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
container.insertAdjacentElement("afterend" ,footer);

makePage();

function deletePage () {
   container.innerHTML= '';
   container.className = '';
};

homeBtn.addEventListener("click", () => { deletePage();
                                          makePage()});
menuBtn.addEventListener("click", () => { deletePage();
                                          makeMenu()});
contactBtn.addEventListener("click", () => { deletePage();
                                             makeContact()});

                                             
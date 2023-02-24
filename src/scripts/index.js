
import makePage  from "./page-load";
import makeMenu from "./menu";
import makeContact from "./contact";
import '../style/style.css';
import bg from "../images/ice-cream.webp";
import Logo from '../images/logo-yellow.png';

const container = document.getElementById('content');
container.style.backgroundImage = `url(${bg})`;
container.style.backgroundRepeat = 'no-repeat';
container.style.backgroundSize = 'cover';
container.style.backgroundPosition = '50% 40%';
// Header
// create header elements
const header= document.createElement("div");
const logoContainer= document.createElement("div");
const logoContainerContainer= document.createElement("div");
const nav= document.createElement("ul");
const homeBtn= document.createElement("li"); 
const menuBtn= document.createElement("li"); 
const contactBtn= document.createElement("li");
const logoImg = document.createElement("img");
// add nav elements text content
homeBtn.textContent= 'Home';
menuBtn.textContent= 'Menu';
contactBtn.textContent= 'Contact'; 
logoImg.src = Logo;
// add classes to header elements
logoImg.classList.add("logo");
header.classList.add('header');
logoContainer.classList.add('logo');
logoContainerContainer.classList.add('logo-container');
nav.classList.add('nav');
homeBtn.setAttribute('id', 'home');
menuBtn.setAttribute('id', 'menu');
contactBtn.setAttribute('id', 'contact');
// append the header elements to the container
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
logoContainer.appendChild(logoImg);
logoContainerContainer.appendChild(logoContainer);
header.appendChild(logoContainerContainer);
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

                                             
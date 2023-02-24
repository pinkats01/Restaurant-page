
import makePage  from "./page-load";
import makeMenu from "./menu";
import '../style/style.css';

makePage();

function deletePage () {
   const container = document.getElementById("content");
   container.remove();

   const containerRe= document.createElement("div");
   containerRe.setAttribute('id', 'content');
   document.body.appendChild(containerRe);
}

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", () => { deletePage();
                                          makePage()});
menuBtn.addEventListener("click", () => { deletePage();
                                          makeMenu()});
contactBtn.addEventListener("click", () => { deletePage();
                                             makePage()});

function makeMenu () {
    const container = document.getElementById('content');
    container.classList.add("contact-container");
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
    // add classes to header elements
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
    // Contact Body
    // create contact body elements
    const contactContainer = document.createElement("div");
    const addressContainer = document.createElement("div");
    const openTimesContainer = document.createElement("div");
    const phoneContainer = document.createElement("div");
    const messageUsContainer = document.createElement("div");
    const addressImg = document.createElement("img");
    const openTimesImg = document.createElement("img");
    const phoneImg = document.createElement("img");
    const messageUsImg = document.createElement("img");
    const address = document.createElement("p");
    const openTimes= document.createElement("p");
    const phone = document.createElement("p");
    const messageUs = document.createElement("p");
    // add text content
    address.textContent = 'Ice Cream Land, ice, icey street, 55';
    openTimes.textContent = "8am to 10pm";
    phone.textContent = "0555555555";
    messageUs.textContent = "icefood@gmail.com"
    // add imag src's
   /*  adressImg.setAttribute('src', '');
    openTimesImg.setAttribute('src', '');
    phoneImg.setAttribute('src', '');
    messageUsImg.setAttribute('src', '');*/
    // add classes
    contactContainer.classList.add("contact");
    // append elements
    addressContainer.appendChild(addressImg);
    addressContainer.appendChild(address);
    contactContainer.appendChild(addressContainer);
    openTimesContainer.appendChild(openTimesImg);
    openTimesContainer.appendChild(openTimes);
    contactContainer.appendChild(openTimesContainer);
    phoneContainer.appendChild(phoneImg);
    phoneContainer.appendChild(phone);
    contactContainer.appendChild(phoneContainer);
    messageUsContainer.appendChild(messageUsImg);
    messageUsContainer.appendChild(messageUs);
    contactContainer.appendChild(messageUsContainer);
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
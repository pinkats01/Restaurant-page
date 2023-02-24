import Phone from '../images/phone.png';
import Address from '../images/address.png';
import OpenTimes from '../images/clock.png';
import MessageUs from '../images/letter.png';

function makeContact () {
    const container = document.getElementById('content');
    container.classList.add("contact-container");
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
    addressImg.src= Address;
    openTimesImg.src= OpenTimes;
    phoneImg.src= Phone;
    messageUsImg.src= MessageUs;
    // add classes
    contactContainer.classList.add("contact");
    phoneImg.classList.add("contact-icon");
    openTimesImg.classList.add("contact-icon");
    addressImg.classList.add("contact-icon");
    messageUsImg.classList.add("contact-icon");
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
    container.appendChild(contactContainer);
}    

export default makeContact;
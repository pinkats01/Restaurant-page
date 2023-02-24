
function makePage () {
    const container = document.getElementById('content');
    container.classList.add("container");
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
}

export default makePage;
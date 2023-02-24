
function makeMenu () {
    const container = document.getElementById('content');
    container.classList.add("menu-container");
    const menuContainerContainer = document.createElement("div");
    menuContainerContainer.classList.add("menu-container-container");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");
    // Menu body
    function createMeal (name, flavors, topping, prices){
        // create one meal elements  
        const container1= document.createElement("div");
        const containerHeader= document.createElement("div");
        const mealContentContainer= document.createElement("div");
        const mealImgContainer= document.createElement("div");
        const mealImg= document.createElement("img");
        const mealDescriptionContainer= document.createElement("div");
        const mealDescriptionTags= document.createElement("div");
        const flavor= document.createElement("div");
        const toppings= document.createElement("div");
        const mealDescriptionContent= document.createElement("div");
        const flavorContent= document.createElement("div");
        const toppingsContent= document.createElement("div");
        const price = document.createElement("div");
        // add text content
        containerHeader.textContent = `${name} Ice Cream`;
        flavor.textContent = 'Flavor';
        toppings.textContent = 'Toppings';
        toppingsContent.textContent = `: ${flavors}`;
        flavorContent.textContent = `: ${topping}`;
        price.textContent = `${prices}`;
        // add classes     
        container1.classList.add("meal-container");
        containerHeader.classList.add("meal-container-header");
        mealContentContainer.classList.add("meal-content-container");
        mealImgContainer.classList.add("meal-img");
        mealDescriptionContainer.classList.add("meal-description-container");
        mealDescriptionTags.classList.add("description-tags");
        mealDescriptionContent.classList.add("description-content");
        price.classList.add("price");
        // append elements
        container1.appendChild(containerHeader);
        container1.appendChild(mealContentContainer);
        container1.appendChild(price);
        mealContentContainer.appendChild(mealImgContainer);
        mealImgContainer.appendChild(mealImg);
        mealContentContainer.appendChild(mealDescriptionContainer);
        mealDescriptionContainer.appendChild(mealDescriptionTags);
        mealDescriptionContainer.appendChild(mealDescriptionContent);
        mealDescriptionTags.appendChild(flavor);
        mealDescriptionTags.appendChild(toppings);
        mealDescriptionContent.appendChild(toppingsContent);
        mealDescriptionContent.appendChild(flavorContent);
        menuContainer.appendChild(container1);

        
    }
    menuContainerContainer.appendChild(menuContainer);
    container.appendChild(menuContainerContainer);

    createMeal('Strawberry', 'Strawberry', 'berries', '5$');
    createMeal('chocolate', 'chocolate', 'cacao', '5$');
    createMeal('vanilla', 'vanilla', 'syrup', '3$');
    createMeal('fruits', 'mango', 'fruits', '8$');  
}

export default makeMenu;
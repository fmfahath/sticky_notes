//gets elemnt's values
const container = document.getElementById('container');
const addBtn = document.getElementsByClassName('add-btn')[0];

//get data from JSON file (from local storage)
function getAppStorage(){
    return JSON.parse(localStorage.getItem('joes-app') || "[]");
}

//create a new textarea element
function createTextElement(id,contant){
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = contant;
    textElement.placeholder = "Enter Your Notes";
    return textElement;
}   

//getting each data from JSON array and passing that value to create new textarea's function
getAppStorage().forEach(element => {
    const newTextElement = createTextElement(element.id, element.content);
    container.insertBefore(newTextElement,addBtn);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Add sticky notes by clicking add button

function addSticky(){
    // const notes = getAppStorage();
    const newElementObject = {
        id : Math.floor(Math.random() * 10000),
        content : "",
    };

    const addNewTextElement = createTextElement(newElementObject.id, newElementObject.content);
    container.insertBefore(addNewTextElement,addBtn);
};

addBtn.addEventListener('click',()=>addSticky());



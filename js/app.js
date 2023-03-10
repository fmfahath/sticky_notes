//gets elemnt's values
const container = document.getElementById('container');
const addBtn = document.getElementsByClassName('add-btn')[0];

//get data from JSON file (from local storage)
function getAppStorage(){
    return JSON.parse(localStorage.getItem('joes-app') || "[]");
}

//create a new textarea element
function createTextElement(id,content){
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder = "Enter Your Notes";

    //update or save text of sticky note
    textElement.addEventListener('change', ()=>{
        updateNote(id,textElement.value);
    })

    //double click to delete element
    textElement.addEventListener('dblclick', ()=>{
        const check = confirm("Are you sure to delete this note ?");
        console.log(check);
        if(check){
            deleteNote(id,textElement);
        }
    });


    return textElement;
}   

//getting each data from JSON array and passing that value to create new textarea's function
getAppStorage().forEach(element => {
    const newTextElement = createTextElement(element.id, element.content);
    container.insertBefore(newTextElement,addBtn);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Add sticky notes by clicking add button

//Add Button function
function addSticky(){
    const notes = getAppStorage();
    const newElementObject = {
        id : Math.floor(Math.random() * 10000),
        content : ""
    };

    const addNewTextElement = createTextElement(newElementObject.id, newElementObject.content);
    container.insertBefore(addNewTextElement,addBtn);
    notes.push(newElementObject);
    saveNotes(notes);
};


addBtn.addEventListener('click',()=>addSticky());

//function for saving stikey notes into JSON file
function saveNotes(notes){
    localStorage.setItem('joes-app', JSON.stringify(notes)); 
}
 
//function for update or save sticky note's texts
function updateNote(id, content){
    const notes = getAppStorage();
    const updateElement = notes.filter((note) => note.id==id)[0];  
    updateElement.content = content;
    saveNotes(notes);
}

//Double click delete note function
function  deleteNote(id,textElement){
    const notes = getAppStorage().filter((note) => note.id!=id);
    saveNotes(notes);
    container.removeChild(textElement);
}
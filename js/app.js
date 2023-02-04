//gets elemnt's values
const container = document.getElementById('container');
const addBtn = document.getElementsByClassName('add-btn')[0];

//get data from JSON file (from local storage)
function getAppStorage(){
    return JSON.parse(localStorage.getItem('joes-app') || "[]");
}

getAppStorage();
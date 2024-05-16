const inputBox = document.getElementById("input_box");
const listeningContainer = document.getElementById("list_container");

function addTask (){
    if(inputBox.value === ""){
        alert("You must add a task")
    }else{
        let list = document.createElement("li");
        list.innerHTML  = inputBox.value;
        listeningContainer.appendChild(list);
        let clearIcon = document.createElement("span");
        clearIcon.innerHTML = "\u00d7";
        list.appendChild(clearIcon);
    }
    inputBox.value = "";
    saveData();
};

listeningContainer.addEventListener("click", (e)=>{
    if(e.target.tagName ===  "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName  === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData (){
    localStorage.setItem("data", listeningContainer.innerHTML);
};

function showTask(){
    listeningContainer.innerHTML = localStorage.getItem("data");
};
showTask();
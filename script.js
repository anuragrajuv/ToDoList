
const inputBox = document.querySelector("#task-input");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector("#add-button");
const clearAll = document.querySelector("#clear-all");


// Function to add Task to List
function addTask(){
    if(inputBox.value.trim()===""){
        alert("Task Name cant be Empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
    }
    inputBox.value="";
    inputBox.focus();
    save();
}

// Add Task using Add Button
addButton.addEventListener("click",()=>{
    addTask();
})

// Add task using Enter Button
inputBox.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});



// Handling all click events for checking and removing a task
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        toggleCheck(e);
    }else if(e.target.tagName==="SPAN"){
        removeTask(e);
    }
})

// Function to remove task
function removeTask(e){
    e.target.parentElement.remove();
    save();
}


// function to tick a task
function toggleCheck(e){
    e.target.classList.toggle("checked");
    save();
}

// function to save the data to the Local Storage of browser
function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// function to fetch saved data from local storage
function displayTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}


clearAll.addEventListener("click",()=>{
    if(listContainer.innerHTML === ""){
        alert("Nothing to Clear");
    }else{
        listContainer.innerHTML = "";
        save();
        setTimeout(
        alert("All Tasks Cleared")
        ,500)
    }
    
})


displayTasks();
inputBox.focus();


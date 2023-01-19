let tasks = [];

function renderTasks(tasks) {
    //get the list element from the DOM
    const listElement = document.querySelector('#todoList');
    //make sure it is empty
    listElement.innerHTML = "";
    //loop through the tasks array. for each of them we need to add the
    //HTML markup for a todo. 
    tasks.forEach((task) => {  
        listElement.innerHTML += `
        < li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
        <span data-function = "delete"></span>
        <span data-function = "complete"</span>
        </div>
        </li>`;
        
    });
}

function newTask() {
    //get the value entered in the #todo input
     const task = document.querySelector("#todo").value;
     //add it to our arrays tasks
     tasks.push( { detail: task, completed: false});
     renderTasks(tasks);
}

function removeTask(taskElement) {
    //note the use of Array.filter to remove the element from our task
    tasks = tasks.filter(
        (task) => task.detail != taskElement.childNodes[0].inntertext
    );
    //this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    //In this case we need to find the index of the task so we can modify it
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[0].inntertext
    );
    //Once we have the index, we can modify the complete field.
    //tasks[tasksIndex].completed ? false : true is a ternary expression
    //If the first part is true (left of the ?), then the value on the 
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;

    //toggle adds a class if it is not there, removes it if it is.
    taskElement.classList.toggle("strike");

}

function manageTasks(event) {
    //did they click the delete or complete icon?
    console.log(event.target);
    const parent = event.target.closest("li");
    if (event.target.dataset.function === "delete") {
        removeTask(parent);
    }
}

document.querySelector("submitTask").addEventListener("click", newTask);
document.querySelector("todoList").addEventListener("click", manageTasks);

renderTasks(tasks);
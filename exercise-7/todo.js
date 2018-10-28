/* used to assign unique ids to each task */
var taskCounter = 0;

var tasks = [];
const list = document.getElementById("list-1");

function renderTodoProgress() {
    const progressOutput = list.querySelector(".progress-container");
    const checkboxes = list.querySelectorAll("ul li input[type='checkbox']");

    var checkedCount = 0;
    var checkboxCount = checkboxes.length;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    progressOutput.innerText = checkedCount + "/" + checkboxCount + " completed";
}

function taskUpdateHandler(taskId) {
    /* update stored state of task */
    var task = tasks.find(task => task.id === taskId);
    task.done = document.getElementById("task-" + taskId).checked;

    console.log(tasks);

    renderTodoProgress();
}

function renderCheckboxToString(title, id) {
    const checkbox = 
    '<input type="checkbox" id="task-' + id + '" name="task-' + id + '" value="done">' +
    '<label for="task-' + id + '">' + title + '</label>';

    return checkbox;
}

function renderTask(title, id) {
    /* adds the new task to the top of the list element */

    const listOutput = list.querySelector("ul");

    const li = document.createElement("li");
    li.innerHTML = renderCheckboxToString(title, id);
    listOutput.insertBefore(li, listOutput.firstChild);

    listOutput.firstChild.addEventListener("change", function(){
        taskUpdateHandler(id);
    });

    taskUpdateHandler(id);
}

function addTask() {
    const textInput = list.querySelector(".task-input");

    var task = {
        "id": taskCounter,
        "title": textInput.value,
        "timeAdded": Date.now(),
        "done": false
    }
    tasks.push(task);

    taskCounter++;

    renderTask(task.title, task.id);
}

document.querySelector(".add-task-btn").addEventListener("click", addTask);
document.querySelector(".task-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
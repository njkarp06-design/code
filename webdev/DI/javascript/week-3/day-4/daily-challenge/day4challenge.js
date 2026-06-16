const tasks = []
let nextId = 0

function addTask() {
    let inputVal = document.getElementById("taskInput").value

    if (inputVal === "") {
        alert("Please enter a task!")
        return
    }

    let taskObj = {
        task_id: nextId++,
        text: inputVal,
        done: false
    }

    tasks.push(taskObj)

    let listDiv = document.querySelector(".listTasks")

    let taskItem = document.createElement("div")
    taskItem.classList.add("task-item")
    taskItem.setAttribute("data-task-id", taskObj.task_id)

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>'
    deleteBtn.addEventListener("click", function() {
        deleteTask(taskObj.task_id, taskItem)
    })

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "task-" + taskObj.task_id
    checkbox.addEventListener("change", function() {
        doneTask(taskObj.task_id, label)
    })

    let label = document.createElement("label")
    label.htmlFor = "task-" + taskObj.task_id
    label.textContent = inputVal

    taskItem.appendChild(deleteBtn)
    taskItem.appendChild(checkbox)
    taskItem.appendChild(label)
    listDiv.appendChild(taskItem)

    document.getElementById("taskInput").value = ""
}

function doneTask(id, label) {
    let task = tasks.find(t => t.task_id === id)
    task.done = !task.done

    if (task.done) {
        label.classList.add("done-label")
    } else {
        label.classList.remove("done-label")
    }
}

function deleteTask(id, element) {
    let index = tasks.findIndex(t => t.task_id === id)
    tasks.splice(index, 1)
    element.remove()
}

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault()
    addTask()
})

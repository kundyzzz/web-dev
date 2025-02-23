function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;


    checkbox.onchange = function () {
        span.classList.toggle("completed");
    };


    // span.classList.toggle("completed");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

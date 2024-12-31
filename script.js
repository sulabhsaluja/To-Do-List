let newtask = document.querySelector('#new-task');

// Detect Enter key press in the input field
newtask.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Check if Enter key is pressed
        addTask();
    }
});

let tasklist = document.querySelector('#task-list');

tasklist.addEventListener('click', function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

function addTask() {  // Function name corrected here
    let taskInput = document.getElementById('new-task');
    if (taskInput.value.trim() === "") {
        alert("Please add a task.");
    } else {
        let task = taskInput.value;
        let li = document.createElement('li');
        li.innerHTML = `${task}`;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the close (×) symbol
        span.style.cursor = "pointer"; // Pointer cursor for better UX
        li.appendChild(span);

        let ul = document.getElementById('task-list');
        ul.appendChild(li);
        
        taskInput.value = "";
    }
}

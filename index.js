


function addTask() {
    var tasks = document.getElementById('tasks');
    var userText = document.getElementById('userTextArea').value;

    if (userText.trim() !== "") {
        var taskBox = document.createElement('div');
        taskBox.className = 'task-box';
        taskBox.innerHTML = userText;
        tasks.appendChild(taskBox);

        document.getElementById('userTextArea').value = '';
        document.getElementById('textAreaContainer').style.display = 'none';
    } else {
        alert('Please enter a task.');
    }
}

document.getElementById('add').addEventListener('click', function() {
    var textAreaContainer = document.getElementById('textAreaContainer');
    textAreaContainer.style.display = 'block';
});


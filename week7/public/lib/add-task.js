const doAddTask = async(event) => {
    event.preventDefault();

    const taskInput = document.getElementById('formInputTaskName');
    const description = taskInput.value;
    const statusSelect = document.getElementById('formSelectStatus');
    const options = statusSelect.options;
    const selectedIndex = statusSelect.selectedIndex;
    const status = options[selectedIndex].text;

    

    if (!description) {
        alert('Please enter a task name.');
        return;
    }

    const res = await addTask({ description, completed: status === "pending" ? false : true });

    if (res != null ) {
        inst.generateTasks();
    }
    taskInput.value = '';
}
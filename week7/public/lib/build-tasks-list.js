class TaskList {
    constructor() {
        this.tasks = [];
    }

    createTaskListParent = () => {
        const ul = document.createElement('ul');
        ul.className = 'list-group list-group-flush checked-list-box';
        return ul;
    };

    _deleteEventHandler = (task) => async () => {
        if (task) {
            const res = await deleteTask(task.task_id);
            if (res != null)  {
                document.getElementById(`task-${task.task_id}`).remove();
            }
        }
    };

    buildTaskListRowItem = (task) => {
        const listGroupRowItem = document.createElement('li');
        listGroupRowItem.id = `task-${task.task_id}`;
        listGroupRowItem.className = 'list-group-item';

        const deleteBtn = document.createElement('button');
        const deleteBtnText = document.createTextNode('X');
        deleteBtn.className = 'btn btn-secondary';
        deleteBtn.addEventListener('click', this._deleteEventHandler(task));
        deleteBtn.appendChild(deleteBtnText);

        const taskNameSpan = document.createElement('span');
        const taskNameText = document.createTextNode(task.description);
        taskNameSpan.appendChild(taskNameText);

        const taskStatusSpan = document.createElement('span');
        const taskStatusName = document.createTextNode(task.completed);
        taskNameSpan.appendChild(taskStatusName);

        listGroupRowItem.appendChild(deleteBtn);
        listGroupRowItem.appendChild(taskNameSpan);
        listGroupRowItem.appendChild(taskStatusSpan);
        return listGroupRowItem;
    };

    buildTasksList = (mount, tasks) => {
        return tasks.map((task) => {
            const listGroupRowItem = this.buildTaskListRowItem(task);
            mount.append(listGroupRowItem)
        });
    };

    // swapLoadingDiv = (div) => {
    //     const div = document.getElementById('tasks');
    //     const loadingDiv = div.childNodes[1];
    //     const tasksDiv = this.createTaskListParent();

    //     div.replaceChild(tasksDiv, loadingDiv);
    //     return tasksDiv;
    // };

    generateErrorMsg = (res) => {
        const div = document.createElement('div');
        const text = document.createTextNode(res.message);
        div.className = 'center';
        div.appendChild(text);
        return div;
    };
    
    generateTasks = async () => {
        const todoService = new TodoService();

        const res = await todoService.getTasks();
        const div = document.getElementById('tasks');
        const loadingDiv = div.childNodes[1];
        console.log("!!! generate tasks", res)
        if (res.length) {
            const tasksDiv = this.createTaskListParent();
            this.buildTasksList(tasksDiv, res);
            div.replaceChild(tasksDiv, loadingDiv);
        } else {
            const errDiv = this.generateErrorMsg(res);
            div.replaceChild(errDiv, loadingDiv)    
        }
    };
    
};


const inst = new TaskList();

(async () => {
    inst.generateTasks();
})();
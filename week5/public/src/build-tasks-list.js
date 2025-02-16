/**
 * html stucture:
 * @example
 * <div class="task-list">
 *  <div class="loading">Loading...</div>
 *  <ul>
 *    <li class="task-item">
 *      <div class="task-block">
 *        <span class="task-checkbox">
 *          <input type="checkbox">
 *        </span>
 *        <span class="task-name">Task 1</span>
 *        <span class="task-status">Pending</span>
 *      </div>
 *    </li>
 *  </ul>
 * </div>
 */

(async () => {
    const tasks = await getTasks();
    console.log(tasks);

    if(tasks.length) {
        const div = document.getElementById('tasks');
        const loadingDiv = div.childNodes[1];

        const ul = document.createElement('ul');

        // replace loading with list
        div.replaceChild(ul, loadingDiv); // order is important
        
        tasks.forEach(task => {
            console.log("build-task-list.js",task);
            
            const li = document.createElement('li');
            li.className = 'task-item';
            const block = document.createElement('div');
            block.className = 'task-block';

            const checkboxSpan = document.createElement('span');
            const checkbox  =   document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkboxSpan.className = 'task-checkbox';
            checkboxSpan.appendChild(checkbox);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'task-name';
            nameSpan.innerText = task.description;

            const statusSpan = document.createElement('span');
            statusSpan.className = 'task-status';
            statusSpan.innerText = task.completed ? 'Completed' : 'Pending';

            const dateSpan = document.createElement('span');
            dateSpan.className = 'task-date';
            dateSpan.innerText = task.create_time;

            block.appendChild(checkboxSpan);
            block.appendChild(nameSpan);
            block.appendChild(statusSpan);
            block.appendChild(dateSpan);

            li.appendChild(block);
            ul.appendChild(li);
        });
    }
})();
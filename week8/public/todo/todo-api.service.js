const TASKS_API = `${BASE_API_URL}/tasks`;

class TodoService {

getTasks = () => _get(`${TASKS_API}`);

addTask = (formData) => _post(`${TASKS_API}`, formData, DEFAULT_OPTIONS_WITH_AUTH);

deleteTask = (taskId) => _delete(`${TASKS_API}/${taskId}`, OPTIONS_WITH_AUTH);

updateTask = (taskId, formData) => _put(`${TASKS_API}/${taskId}`, formData, DEFAULT_OPTIONS_WITH_AUTH);

}
const TASKS_API = `${BASE_API_URL}/tasks`;

const getTasks = () => _get(`${TASKS_API}`);

const addTask = (formData) => _post(`${TASKS_API}`, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteTask = (taskId) => _delete(`${TASKS_API}/${taskId}`, OPTIONS_WITH_AUTH);    
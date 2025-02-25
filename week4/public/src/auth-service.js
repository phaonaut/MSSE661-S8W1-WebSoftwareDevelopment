const BASE_API_URL = 'http://localhost:3000/api';
const AUTH_API = `${BASE_API_URL}/auth`;
const USER_API = `${BASE_API_URL}/users`;

function register(formData) {
    return _post(`${AUTH_API}/register`, formData);
}

function login(formData) {
    return _post(`${AUTH_API}/login`, formData);
}

function loadAccount(formData) {
    return _post(`${AUTH_API}/me`, formData);
}
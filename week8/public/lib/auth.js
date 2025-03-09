"use strict"

const doLogin = (event) => {
    console.log("doLogin");
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    login({username, password})
    .then((response) => {
        window.location.href = "./todo/todo.html";        
    });

};

const doRegister = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    register({username, email, password}).then((response) => {
        console.log("User registered:", response);
        window.location.href = "./todo/todo.html";
    });
};

const doLogout = (event) => {
    event.preventDefault(); 
    console.log("User logged out");
    logout();
    window.location.href = "/";
};

const doUpdatePassword = (event) => {
    event.preventDefault();
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const newPasswordRenter = document.getElementById("newPasswordRenter").value;

    if (!currentPassword || !newPassword || !newPasswordRenter) {
        alert("Please fill in all fields.");
        return;
    }

    if (newPassword === currentPassword) {
        alert("New password must be different from the current password");
        return;
    }
    
    if (newPassword !== newPasswordRenter) {
        alert("New passwords do not match");
        return;
    }
    
    updatePassword({currentPassword, newPassword})
    .then((response) => {
        window.location.href = "./todo/todo.html";        
    });
}
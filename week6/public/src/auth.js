"use strict"

const doLogin = (event) => {
    console.log("doLogin");
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    login({username, password})
    .then((response) => {
        window.location.href = "home.html";        
    });

};

const doRegister = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    register({username, email, password}).then((response) => {
        console.log("User registered:", response);
        window.location.href = "home.html";
    });
};

const doLogout = (event) => {
    event.preventDefault(); 
    console.log("User logged out");
    logout();
    window.location.href = "/";
};
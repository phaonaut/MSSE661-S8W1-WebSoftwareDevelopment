"use strict"

// Set listener and capture input
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log("Username:", username);
        console.log("Password:", password);
    });
});

var person = {
    name: "rodney",
    age: 40,
    ageText: function() {
        return this.name + " is " + this.age + " years old.";
    }
}

console.log(person.ageText());
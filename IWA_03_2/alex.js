// alex.js
//changed private to 'let' to declare variables.
let firstname = "Alex";
let surname = "Naidoo";
let role = "Head of Marketing";

let display = `${firstname} ${surname} (${role})`;
document.querySelector('#alex').innerText = display;

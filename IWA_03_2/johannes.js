// johannes.js
//changed private to 'let' to declare variables.
let firstname = "Johannes";
let surname = "Potgieter";
let role = "Intern";

let display = `${firstname} ${surname} (${role})`;
document.querySelector('#johannes').innerText = display;

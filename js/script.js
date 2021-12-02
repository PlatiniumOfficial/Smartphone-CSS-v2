let button = document.querySelector(".home_button");
let display = document.querySelector(".display");

button.addEventListener("click", function() {
    display.classList.toggle("active");
})

// moment.locale('fr')
// setInterval(updateTime, 1000);
// Heure
// //let heure = moment().format("H:mm:ss") //moment().format("H:mm:ss");
// Date
// let date = moment().format("Do MMM YYYY");


// let time = document.querySelector(".time")
// //time.children[0].innerHTML = heure;
// time.children[1].innerHTML = date;

// function updateTime(){
//     let heure = moment().format("H:mm:ss")
//     time.children[0].innerHTML = heure;
// }
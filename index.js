const homeworks = ["Lavar la loza", "Leer un libro", "Tomar Agua", "Dar Gracias", "Estudiar Programación"];
const hw = document.querySelector(".checkbox");
homeworks.forEach(work => {
    hw.innerHTML += `<ul><label><input type="checkbox" > ${work.toUpperCase()}</label><ul>`
})

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ul = document.querySelector("#day-lis");
const dayUpper = days.map(day => {
    ul.innerHTML += `<ul><label><input type="checkbox"> ${day.toUpperCase()}</label></ul>`


});
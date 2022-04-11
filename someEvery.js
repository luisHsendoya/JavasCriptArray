const objec1 = [{
        name: "maria",
        age: 17
    },
    {
        name: "martha",
        age: 19
    },
    {
        name: "Dora",
        age: 21
    },
    {
        name: "Eugenia",
        age: 13
    },
    {
        name: "Ramirez",
        age: 14
    },
    {
        name: "Zuluaga",
        age: 15
    }, {
        name: "Susana",
        age: 19
    }

]

console.log("every ", objec1.every(elem => elem.age >= 18))
console.log("some ", objec1.some(elem => elem.age >= 18))
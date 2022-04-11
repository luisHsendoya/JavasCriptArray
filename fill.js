const object1 = [{
        name: "luis",
        age: 25,
        income: 34000,
        working: true,


    },
    {
        name: "piedad",
        age: 62,
        income: 54000,
        working: true,
    },
    {
        name: "daniela",
        age: 28,
        income: 34000,
        working: false,
    },
    {
        name: "humberto",
        age: 85,
        income: 47000,
        working: false,
    },
    {
        name: "salomon",
        age: 73,
        income: 104000,
        working: true,
    }
];
object1.map(function(elem) { elem.income < 40000 ? elem.income = 0 : elem.income = 1 })
console.log(object1)


const array = ['a', 'b', 'c', 'd', 'e', ];

const result = array.values();

console.log(result)

for (let i = 0; i < array.length; i++) {
    console.log(result.next().value)
}
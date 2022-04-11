let array = [];
const number = () => {
    for (let i = 0; i < 100; i++) {
        array.push(i * 2);
    }

}
number();
console.log(array.filter(elem => elem % 10 == 0));

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

//console.log(object1.filter(elem => elem.age > 50 && elem.income > 40000 && elem.working == true));
console.log(object1.filter(elem => { return elem.name.includes("h") }))
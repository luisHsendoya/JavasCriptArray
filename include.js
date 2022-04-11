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
        age: 62,
        income: 104000,
        working: true,
    }
];

//console.log(object1.includes("62"));

(function() {
    console.log([].includes.call(arguments, 2));
})(1, 2, 3, 4, 5);


(function() {
    console.log([].includes.call(arguments, 'x'))
})("a", "b", "c", "d");
const suma = (a, b, c) => {
    return a + b + c;
}
const array1 = [4, 5, 6];
console.log(suma.apply(null, array1));
console.log(suma(...array1));

const object1 = [{
        name: "lukas",
        age: 45,
        cost: 10500
    },
    {
        name: "maria",
        age: 28,
        cost: 8530
    },
    {
        name: "juliana",
        age: 23,
        cost: 2300
    },
    {
        name: "carlos",
        age: 19,
        cost: 15300
    }
];

//ordené de mayor a menor el object1
console.log("-------------------")
object1.sort((a, b) => {
    return a.age - b.age;
})

const age = object1.map(element => element.age).sort((a, b) => { return a - b; })
console.log(age);

const object2 = object1.map(element => {
    return {
        ...element,
        tax: 19
    }
})

console.log("-------------------")
console.log(object1);
console.log("-------------------")

console.log(object2);

object1.forEach(element => {
    ()

});
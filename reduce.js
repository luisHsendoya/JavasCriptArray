//console.log(array.reduce(function(a, b) { return a + b; }, -9990));

const array1 = [1, 1, 2, 2, 4, 3, 2, 3, 1, 3, 6];
const array2 = array1.reduce(function(a, b) {
    if (!a[b]) {
        a[b] = 1;
    } else {
        a[b] = a[b] + 1
    }
    return a;
}, {})


//1  Generamos un array con n elementos
let array = [];
const number = (() => {
    for (let i = 0; i <= 100; i++) {
        array.push(i);
    }

})();
// 2 Generamos un rango de agrupación
let range = array.filter(elem => elem % 10 == 0);

//3  Generamos un objeto que agrupa los valores del array
const arrayReloaded = array.reduce(function(obj, valueA) {


    for (let j = 0; j < range.length; j++) {
        let values = array.filter(element => element >= range[j] && element < range[j + 1]);

        obj[`${range[j]}-${range[j+1]}`] = values.length;

    }

    return obj;
}, {});
//4 Imprimimos en consola
console.log(arrayReloaded);
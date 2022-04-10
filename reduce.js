let array = [1, 2, 3, 4, 5];
const number = () => {
    for (let i = 0; i < 100; i++) {
        array.push(i * 2);
    }

}
number();
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

console.log(array2);
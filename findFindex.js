const pushArray = (obj) => {
    for (let i = 0; i < 100; i++) {
        obj.push(i);

    }
    console.log(obj)
}
const arrays = [];
pushArray(arrays)

console.log("find ", arrays.find(elem => { return elem % 3 == 0 && elem % 7 == 0 }))
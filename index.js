const food = [{
        name: "burger",
        price: 8300,
    }, {
        name: "pizza",
        price: 3200,
    },
    {
        name: "hotdog",
        price: 4500,
    }
];

const ul = document.querySelector("#list");
food.forEach(product => {
    ul.innerHTML += `<ul>${product.name} - ${product.price}</ul>\n `
})
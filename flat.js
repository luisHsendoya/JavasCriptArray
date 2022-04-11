const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j])


    }

}


//Reto del curso de manejo de arrays en JavaScript

const calendars = {
    primaryCalendar: [{
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [{
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const dates = [new Date(2022, 12, 31, ), new Date(2019, 10, 01, ), new Date(2020, 1, 31, ), new Date(2018, 1, 1, )]

const values = Object.values(calendars)
console.log(values.flatMap(elem => elem.map(date => date.startDate)))

console.log(dates.sort((a, b) => new Date(b) - new Date(a)))

const aarray = ['a', 'bb', 'ccc'];
const rta = aarray.map(item => item.length);
console.log(rta)
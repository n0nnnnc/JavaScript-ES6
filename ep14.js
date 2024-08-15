// Array Map

const data = [
    {day: "01/06/2564", weather: "แดดร้อน", temp: 27},
    {day: "02/06/2564", weather: "ฝนตก", temp: 23},
    {day: "03/06/2564", weather: "หมอก", temp: 18},
];

const result = data.map(e => e.weather);

console.log(result);

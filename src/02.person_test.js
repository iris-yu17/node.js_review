// 可把require想成是node提供的功能，會把'./02.person'放進來(參照設定給Person)
// require連接的橋樑是module.exports
// const Person = require('./02.person');
const { Person, f1 } = require('./02.person');


const p1 = new Person("Dave", 23);
// 若不填就會帶預設值
// const p1 = new Person();

// 改名字
p1.name = "Bill"
console.log(p1.toJSON())

console.log(f1(6))
// terminal
// node .\src\02.person_test.js
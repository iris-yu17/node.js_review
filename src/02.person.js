// 定義一個class叫做person
class Person {
    // 建構函式: 在建立一個物件的時候，這個物件建立好之後，第一個自動呼叫的，叫建構函式
    // constructor(name, age) {
    constructor(name = 'noname', age = 20) {
        this.name = name;
        this.age = age;
    }

    // 方法
    // 這邊toJSON是自己定義的
    toJSON() {
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
}

// const p1 = new Person("Dave", 23);
// 若不填，就會帶預設值
// const p1 = new Person();
// console.log(p1.toJSON())

// node裡面預設module這個物件
// 把這個模組的內容作匯出
// module.exports = Person;

// export多個:包成物件
module.exports = {
    Person,
    f1: a => a * a,
}






// terminal
// node .\src\02.person.js

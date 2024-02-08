// Funksiya konstruktori bilan ishlash

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.salom = function () {
//         console.log(`Salom ${this.name}`)
//     }
// }
//
// User.prototype.exit = function () {
//     console.log(`Foydalanuvchi ${this.name} exit`)
// }
//
// const erkin = new User('Erkin', 3)
// const muhammadsodiq = new User('MuhammadSodiq', 4)
// const hasan = new User('Hasan', 5)
// erkin.exit()
// muhammadsodiq.exit()
// hasan.salom()
// console.log(erkin)
// console.log(muhammadsodiq)

// Kontekst vizovat bilan tanishish

// function hi(){
//     console.log(this)
// }
//
// hi()

// function showThis(a, b) {
//     console.log(this)
//     function sum(){
//         console.log(this)
//         return a + b
//     }
//
//     console.log(sum())
// }
//
// showThis(3, 3)

// const obj = {
//     a: 10,
//     b: 20,
//     sum: function () {
//         console.log(`${this.a} + ${this.b}`)
//     }
// }
//
// obj.sum()

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.age = 25;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Salom ${this.name}`)
//     }
// }
//
// const erkin = new User('Erkin', 2)
// console.log(erkin)
// erkin.hello()

function sayName(surname) {
    console.log(this)
    console.log(this.name + " " + surname)
}
const user = {
    name: 'Erkin'
}

sayName.call(user, 'Najimov')
sayName.apply(user, ['Najimov'])
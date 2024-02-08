// Funksiya konstruktori bilan ishlash

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.salom = function () {
        console.log(`Salom ${this.name}`)
    }
}

User.prototype.exit = function () {
    console.log(`Foydalanuvchi ${this.name} exit`)
}

const erkin = new User('Erkin', 3)
const muhammadsodiq = new User('MuhammadSodiq', 4)
const hasan = new User('Hasan', 5)
erkin.exit()
muhammadsodiq.exit()
hasan.salom()
console.log(erkin)
console.log(muhammadsodiq)


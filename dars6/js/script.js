const car = {
    name: 'MERC',
    color: 'black',
    extraBalon: 4,
    speed: function () {
        console.log('100 km/h')
    }
}

Object.prototype.sayHello = function () {
    console.log("Salom Dunyo")
}

const bus = Object.create(car)

bus.name = 'MAN'
bus.extraBalon = 8
bus.color = 'red'


const str = 'Salom string data type'
const string = new String('Ikkinchi turi stringni')
class Car{
    constructor(options) {
        this.name = options.name
        this.isAirBag = options.isAirBag
        this.extraMishlen = options.extraMishlen
    }
    speed(){
        console.log('100 km/h')
    }
}

const Mercedes = new Car({
    name: "Mercedes",
    isAirBag: true,
    extraMishlen: 4
})

class Bus extends Car {
    constructor(options) {
        super(options);
        this.weight = options.weight
    }
    speed() {
        super.speed();
        console.log('40 km/h')
    }
    get extraBalonInfo() {
        return this.extraMishlen * 3
    } // # GETTERS usuli eski qiymatga yangi qiymati qo'shadi va yig'indini chiqaradi #//
    set extraBalonInfo(newValue){
        this.extraMishlen = newValue
    } //# SETTERS usuli eski qiymat o'rniga yangisini o'zgartirip qoyadi #//
}

const MAN = new Bus({
    name: "Man",
    isAirBag: false,
    extraMishlen: 6,
    weight: '50.000kg'
})

// GETTERS


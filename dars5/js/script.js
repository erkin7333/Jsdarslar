// class Car{
//     constructor(options) {
//         this.name = options.name
//         this.isAirBag = options.isAirBag
//         this.extraMishlen = options.extraMishlen
//     }
//     speed(){
//         console.log('100 km/h')
//     }
// }
//
// const Mercedes = new Car({
//     name: "Mercedes",
//     isAirBag: true,
//     extraMishlen: 4
// })
//
// class Bus extends Car {
//     constructor(options) {
//         super(options);
//         this.weight = options.weight
//     }
//     speed() {
//         super.speed();
//         console.log('40 km/h')
//     }
//     get extraBalonInfo() {
//         return this.extraMishlen * 3
//     } // # GETTERS usuli eski qiymatga yangi qiymati qo'shadi va yig'indini chiqaradi #//
//     set extraBalonInfo(newValue){
//         this.extraMishlen = newValue
//     } //# SETTERS usuli eski qiymat o'rniga yangisini o'zgartirip qoyadi #//
// }
//
// const MAN = new Bus({
//     name: "Man",
//     isAirBag: false,
//     extraMishlen: 6,
//     weight: '50.000kg'
// })
//
// // GETTERS
//

class Component{
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    showElement(){
        this.$el.style.display = 'block'
    }
    hideElement(){
        this.$el.style.display = 'none'
    }
}

// class Squere extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = options.size + 'px'
//         this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }
//
// const square1 = new Squere({
//     selector: '#square1',
//     size: 100,
//     color: 'crimson'
//
// })
//
// const square2 = new Squere({
//     selector: '#square2',
//     size: 100,
//     color: 'coral'
// })

// uyga vazifa doira shaklini chiqarish

class Circle extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.size + 'px'
        this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
        this.$el.style.borderRadius = '50%'
        this.$el.style.border = options.border + 'px solid transparent'
    }
}

const square1 = new Circle({
    selector: '#square1',
    size: 100,
    radius: 50,
    color: 'crimson',
    border: 25
});

const square2 = new Circle({
    selector: '#square2',
    radius: 50,
    size: 100,
    color: 'coral',
    border: 25
});


// function sam(){
//     console.log(this)
// }
//
// // Object ichidagi context this nimaga teng desa?
// // Object ichidagi this objectni o'ziga teng
//
// const persone = {
//     name: "Erkin",
//     age: 25,
//     job: "Angular Js DEVELOPER",
//     callContext: sam,
//     callAnotherContext: sam.bind(this),
//     callInfoJob: function (number) {
//         console.group(`${this.name} info: `)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${this.job}`)
//         console.log(`Contact is ${number}`)
//         console.groupEnd()
//     }
// }
//
// const frontendDev = {
//     name: 'Maruf',
//     age: 22,
//     job: "Back-end developer"
// }

// persone.callInfoJob.bind(frontendDev)();

// call va apply

// const fullInfo = persone.callInfoJob.bind(frontendDev);
// fullInfo('+998974347333')

// apply bilan ishlashda doim parametrga to'rburchak qovs bilan beriladi
// persone.callInfoJob.apply(frontendDev, ['+9989712345676'])

// call
// persone.callInfoJob.call(frontendDev, '+9987945352165')

// ======= //

// Massivlar bilan ishlash

// const array = [10, 20, 30, 40, 50, 60, 70]
//
// function mult(arr, number) {
//     return arr.map(function (i){
//         return i * number
//     })
// }
// console.log(mult(array, 10))

// ContextThis yordamida massiv ichidagi sonlarni ko'paytirish

const array = [10, 20, 30, 40, 50, 60, 70]

Array.prototype.logger = function (number) {
    return this.map(function (i){
        return i * number
    })
}
console.log(array.logger(2))
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
// function calcFunction(number){
//     return function () {
//         console.log(10 * number)
//     }
// }
//
// const calc = calcFunction(8)
// console.log(calc())

// function calcFunction(number) {
//     return function (n){
//         return n * number
//     }
// }
//
// const multTen = calcFunction(2)
// console.log(multTen(10))

// domenlar generatsiya qilish

// function urlGenerator(domain) {
//     return function (host) {
//         return `https://${host}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru')
// const dom = ['google', 'netflix', 'twitter', 'instagram', 'yandex']
//
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(comUrl('twitter'))
// console.log(comUrl('instagram'))
// console.log(comUrl('yandex'))
//
//
// console.log(ruUrl('google'))
// console.log(ruUrl('netflix'))
// console.log(ruUrl('twitter'))
// console.log(ruUrl('instagram'))
// console.log(ruUrl('yandex'))
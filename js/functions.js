// function myFirstFunction() {
//     console.log("Meni ismim Erkin")
// }
// myFirstFunction()
//
// function myLastFunction(name) {
//     console.log(`Meni ismim ${name}`)
// }
// myLastFunction('Hasan aka')
//
//
// let myFunc = function (){
//     console.log("Bu funsiya expression funsiya dep nomlanadi")
// }
// myFunc()

// let num = 5
// function myFirstFunction(name){
//     let num = 10
//     num++
//     console.log(num)
//     console.log(`Salom meni ismim ${name}`)
// }
// myFirstFunction('Erkin')
// console.log(num)

function myFirstFunction(name, age) {
    alert(`Salom meining ismim ${name} va men Full-Stack Dasturchiman`)

    function showSkills() {
        let skills = ['Linux/Ubuntu', 'Python', 'Django', 'Django Restframework', 'SQL', 'POSTGRSQL',
            'Html', 'Css', 'Bootstrap', 'Javascript', 'Vue.js', 'Angular.js']
        for (i = 0; i < skills.length; i++) {
            alert(`Sizda mahorat bor ${skills[i]}`)
        }
    }
    showSkills();
    function checkAge() {
        alert(`Yoshim ${age}da`)
        if (age < 18) {
            alert('18 yosh dasturlashni urganish uchun yaxshi')
        } else if (age > 18) {
            alert('25 yosh dasturlashni urganish uchun yaxshi')
        }
    }
    checkAge();
    function calcPow(num) {
        return num * num
    }
    console.log(calcPow(5))
}

myFirstFunction("Erkin", '25')

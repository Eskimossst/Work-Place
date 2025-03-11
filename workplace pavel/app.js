let file = 100;
let firstName = 'Reinar'
const isProgrammer = true

firstName = "Henrikki"
// isProgrammer = false

//console.log('Test',firstName)
//console.log(file + 10)

//let file2 = file +25
//console.log(file, file2)
const fullName = firstName + ' Jarvinen'
console.log(fullName)

const resultElement = document.getElementById("sum")
// console.log(resultElement.textContent)
// resultElement.textContent = 100
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const copyResult = document.getElementById('calcu')
// console.log(input1.value)
// console.log(input2.value)

const sume = Number(input1.value) + Number(input2.value)
console.log(typeof sume)

copyResult.onclick = function () {
    console.log('Hello Click!')
}

// let name = "Henrikki"
// let age = " 29.11.1999"
// let words = " fly"
// let agree = name + age + words

// console.log (agree)

const array = [1, 2, 3]

console.log (array)

const inputElement = document.getElementById ('names')
const createBtn = document.getElementById ('agree')
const listElement = document.getElementById ('list-some')

// console.log (inputElement.value)

createBtn.onclick = function () {
    listElement.innerHTML = inputElement.value
}
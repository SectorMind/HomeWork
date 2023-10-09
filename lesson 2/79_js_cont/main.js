// Conditions

const firstNumber = '5'
const secondNumber = 5
let result = null

if (firstNumber !== secondNumber || firstNumber <= secondNumber) {
    result = firstNumber + secondNumber
    console.log(true, result)
} else {
    result = firstNumber * secondNumber
    console.log(false, result)
}

console.log(typeof(result))


const alex = 'admin'

if (alex === 'user') {
    console.log('Alex is user')
} else if (alex === 'vip'){
    console.log('Alex is vip user')
} else {
    console.log('Alex is admin')
}

alex === 'admin' ? console.log('Alex is admin') : console.log('Alex is not admin')

// Home work
const age = 18.1
age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам не 18 лет')
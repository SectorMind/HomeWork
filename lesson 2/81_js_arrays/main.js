// Function

// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(3, 10)
// console.log(result)

// const users = ['John', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// const users = ['John', 'Ann', 'Alex', 'Max']

// // стрелочная функция
// const checkForCopyItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(users, 'Alex'))



// Home work
// 1)
console.log('Задание 1')
const randomNumbers = [10, 21, 3, 4, 5, 76, 13]
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i]%2 == 0) {
        console.log(randomNumbers[i])
    }
}

// 2)
console.log('Задание 2')
const rainbowColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = rainbowColor.length - 1; i >= 0; i--) {
    console.log(rainbowColor[i])
}

console.log('End the program')
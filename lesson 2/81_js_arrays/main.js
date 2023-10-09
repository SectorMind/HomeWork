// Arrays

// const numbers = [1, '2', true, [1,2,3], 5]
const numbers = [1, 2, 3, 4, 5]

// numbers[4] = 6

// console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i] + 1)
}

// console.log(numbers)

// Home work
// 1)
const randomNumbers = [10, 21, 3, 4, 5, 76, 13]
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i]%2 == 0) {
        console.log(randomNumbers[i])
    }
}

// 2)
const rainbowColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = rainbowColor.length - 1; i >= 0; i--) {
    console.log(rainbowColor[i])
}

console.log('End the program')
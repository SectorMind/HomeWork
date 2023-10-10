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
console.log('Задание 1')
function hello(name) {
    return `Hello ${name}`
}

// 2)
const arr = [2, 5, 17, 0, 56]

function moreThanTen(arr) {
    let eq = 0
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > 10) {
            eq++
            console.log(arr[i])
        }
    }
    if (eq == 0) {
        return 'All numbers are less than 10'
    } else {
        return `numbers less than 10 - ${eq}`
    }
}



// 3) Калькулятор
console.log('Задание 3')
let op;

function func() {
    let result;
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2) {
                result = num1 / num2;
            } else {
                result = `${num1}/${num2} не является вещественным числом`;
            }
            break;
        default:
            result = 'выберите операцию';
    }
    document.getElementById("result").innerHTML = result;

}
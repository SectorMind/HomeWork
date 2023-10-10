// const user = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }
// console.log(user.name)

// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello, ${name}!`)
//         }
//     }
// }
// console.log(users.john.isAdmin)
// users.john.sayHello('Tom')

// const users = [
//     {
//         name: 'Alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'John',
//         age: 30,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'Alice',
//     age: 25,
//     isAdmin: true
// })

// for (let i=0; i <users.length; i++) {
//     console.log(users[i].name, users[i].age)
// }

// const foo = 'Hello, world!'
// console.log(foo.toUpperCase())

// Home work
// 1)
console.log('Задание 1')
const me = {
    name: 'Alex',
    age: 23,
    gender: 'male',
    education: 'higher'
}
console.log(me)

// 2)
console.log('Задание 2')
const foo = {
        name: 'Alex',
        sayHello(name) {
            return console.log(`Hello, ${name}!`)
        }
}

foo.sayHello(foo.name)

// 3)
console.log('Задание 3')

const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Alice',
        age: 25,
        isAdmin: false
    },
    {
        name: 'Ben',
        age: 20,
        isAdmin: false
    }
]

let easyUser = 0
for (let i=0; i < users.length; i++) {
    if (users.isAdmin == false) {
        easyUser++
    }
}
console.log(`Простых пользователей ${easyUser}`)
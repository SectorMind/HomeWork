const arr = [1,2,3,4]
arr.push(5)
console.log(arr.length)

const users = [
    {
        name: 'Alex',
        age: 23
    },
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Rock',
        age: 25
    }
]

const userName = []

users.forEach((user) => {
    userName.push(user.name)
    // console.log(user)
})

console.log(userName)
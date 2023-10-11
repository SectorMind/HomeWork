const button = document.querySelector('.btn')
let btnIsRed = false

button.addEventListener('click', () => {
    console.log('Click +')
    if (btnIsRed) {
        button.style.backgroundColor = 'blue'
        btnIsRed = false
    } else {
        button.style.backgroundColor = 'red'
        btnIsRed = true
    }
})



// document.addEventListener('scroll', () => {
//     console.log('scroll')
// })

function scrolling() {
    console.log('scroll')
}
document.addEventListener('scroll', scrolling)
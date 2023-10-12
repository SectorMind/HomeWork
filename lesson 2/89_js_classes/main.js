const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

// btn.addEventListener('click', () => {
//     // console.log(text.classList)
//     // text.classList.toggle('red')
//     text.classList.toggle('move')
//     text.classList.remove('red')
// })

btn.addEventListener('click', () => {
    text.classList.toggle('move')
    if (text.classList.contains('move')) {
        text.textContent = 'Me move'
    } else {
        text.innerText = 'TEXT'
    }
})
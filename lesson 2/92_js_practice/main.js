// // const btns = document.querySelectorAll('.btn')
// // 
// // btns.forEach(btn => {
// //     btn.addEventListener('click', () => {
// //         console.log(btn.textContent)
// //     })
// // })

// const btnsWrapper = document.querySelector('.btns')

// btnsWrapper.addEventListener('click', event => {
//     const target = event.target

//     // if (event.target && event.target.tagName === 'BUTTON') {
//     if (target && target.classList.contains('btn')) {
//         console.log(target.textContent)
//     }
// })

const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body


const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}
const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

// btn.addEventListener('click', () => {
//     modal.classList.add('modal--open')
//     body.classList.add('body--fixed')
// })
btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('model__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})
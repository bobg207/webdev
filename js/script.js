const key = '3ce5c8acff59e020b74f1fc8781421a3'
const plusBtns = document.querySelectorAll(".plus")
const minusBtns = document.querySelectorAll(".minus")
const answers = document.querySelectorAll(".faq-answer")
const menuOpen = document.querySelector("#menu-open")
const menuClose = document.querySelector("#menu-close")
const linksMenu = document.querySelector(".nav")
const currentYr = document.querySelector(".year")
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")


let menuIsOpen = false

// ###############################
// #########  date/time  #########
// ###############################



// #########################
// update the copyright year
// #########################



// #########################
// #########  FAQ  #########
// #########################
plusBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let chosenBtn = parseInt(btn.id)
        btn.style.display = 'none'
        minusBtns[chosenBtn].style.display = 'block'
        answers[chosenBtn].style.display = 'block'
    })
})

minusBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let chosenBtn = parseInt(btn.id)
        btn.style.display = 'none'
        plusBtns[chosenBtn].style.display = 'block'
        answers[chosenBtn].style.display = 'none'
    })
})

// ###############################
// #########  Hamb Menu  #########
// ###############################
// menuOpen.addEventListener('click', () => {
//     linksMenu.style.display = 'block'
//     menuClose.style.display = 'inline-block'
//     menuOpen.style.display = 'none'
// })

// menuClose.addEventListener('click', () => {
//     linksMenu.style.display = 'none'
//     menuClose.style.display = 'none'
//     menuOpen.style.display = 'inline-block'
// })

menuOpen.addEventListener('click', () => {
    linksMenu.classList.toggle('.active')
    menuClose.classList.toggle('.active')
    menuOpen.classList.toggle('.active')
})
menuClose.addEventListener('click', () => {
    linksMenu.classList.toggle('.active')
    menuClose.classList.toggle('.active')
    menuOpen.classList.toggle('.active')
})
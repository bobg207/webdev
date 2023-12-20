const plusBtns = document.querySelectorAll(".plus")
const minusBtns = document.querySelectorAll(".minus")
const answers = document.querySelectorAll(".faq-answer")

plusBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let chosenBtn = btn.id
        // in js if you multiply a str by 1 it gets converted to an int
        chosenBtn = chosenBtn.slice(-1)*1
        // console.log(answers[chosenBtn])
        btn.style.display = 'none'
        minusBtns[chosenBtn].style.display = 'block'
        answers[chosenBtn].style.display = 'block'
    })
})

minusBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let chosenBtn = btn.id
        // in js if you multiply a str by 1 it gets converted to an int
        chosenBtn = chosenBtn.slice(-1)*1
        // console.log(answers[chosenBtn])
        btn.style.display = 'none'
        plusBtns[chosenBtn].style.display = 'block'
        answers[chosenBtn].style.display = 'none'
    })
})
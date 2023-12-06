const cells = document.querySelectorAll(".cell");
const keys = document.querySelectorAll(".key")
const enterBtn = document.getElementById('enter')
const deleteBtn = document.getElementById('delete')
const target = document.querySelector('.target')
const current = document.querySelector('.current')

let row = 1;
let currentKey = 0
let targetWord = 'graph'
let currentWord=''
let guesses = []

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        if (currentWord.length < 5) {
            fillCells(key.id)
            currentWord += key.id
            target.innerText = targetWord
            currentKey++
        }
    })
})

deleteBtn.addEventListener('click', (e) => {
    if (currentWord.length > 0) {
        currentWord=currentWord.slice(0, -1)
    }
    current.innerText = currentWord
})

function fillCells(letter) {
    let cell = 0
    currentWord.forEach((char) => {
        cells[cell].innerText = letter
        cell++
    })
    current.innerText = currentWord
}
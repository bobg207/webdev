const cells = document.querySelectorAll(".cell");
const keys = document.querySelectorAll(".key")
const enterBtn = document.getElementById('enter')
const deleteBtn = document.getElementById('delete')
let row = 1;
let currentKey = 1
let currentWord = []
let guesses = []

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        if (currentWord.length < 6) {
            cells[currentKey].innerText = key.id
            currentKey++
        }

        
        
    })
})
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
menuOpen.addEventListener('click', () => {
    linksMenu.style.display = 'block'
    menuClose.style.display = 'inline-block'
    menuOpen.style.display = 'none'
})

menuClose.addEventListener('click', () => {
    linksMenu.style.display = 'none'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'inline-block'
})

// ###############################
// #########  Dad Jokes  #########
// ###############################
const djUrl = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38da3868b8mshe31b334e91ea62cp16cbaejsn18ddea5caf90',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

async function getJoke() {
    try {
        const response = await fetch(djUrl, options);
        const result = await response.json();
        const joke = result[0].joke;
        theJoke.textContent = joke
    } catch (error) {
        theJoke.textContent = "something went awry...";
    }
}

// jokeBtn.addEventListener('click', () => {
//     getJoke()
// })

// ###############################
// #########  weather    #########
// ###############################

// coordinates for Portland, ME
let latitude = 43.65737
let longitude = -70.2589




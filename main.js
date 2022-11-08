const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const errorMsg = document.querySelector('.errorMsg')

randomNumber = ((Math.random() * (10 - 0) + 0).toFixed(0))
let attempt = 1
firstAttempt = true

function handleTryClick(event) {
    event.preventDefault() // não faça o padrão
    
    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        firstAttempt
        ? screen2.querySelector('h2').innerText = `Você acertou em ${attempt} tentativa.`
        : screen2.querySelector('h2').innerText = `Você acertou em ${attempt} tentativas.`
        
    }

    inputNumber.value = ""
    attempt++
    firstAttempt = false
    errorMsg.classList.remove('hide')
    
}

// eventos

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    errorMsg.classList.add('hide')
    randomNumber = ((Math.random() * (10 - 0) + 0).toFixed(0))
    attempt = 1
})
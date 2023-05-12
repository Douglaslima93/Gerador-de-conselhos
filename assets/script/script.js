const conselho = document.querySelector('#msg')
const advice = document.querySelector('#advice')

advice.style.color = 'hsl(150, 100%, 66%)'
conselho.style.color = 'hsl(193, 38%, 86%)'

function botao() {
    fetch('https://api.adviceslip.com/advice')
.then(function(response){
    return response.json()
})

.then(function(data){
    advice.innerHTML = `ADVICE # ${data.slip.id}`
    conselho.innerHTML = `"${data.slip.advice}"`
    
})
}





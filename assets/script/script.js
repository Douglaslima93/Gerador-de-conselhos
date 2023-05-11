const conselho = document.querySelector('#msg')

function botao() {
    fetch('https://api.adviceslip.com/advice')
.then(function(response){
    return response.json()
})

.then(function(data){
    conselho.innerHTML = data.slip.advice
})

}








/*
function fetchApiData() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const li = document.querySelector('#msg')
        data.map(() => {} )

    })
}*/
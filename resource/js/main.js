const btnMeses = document.querySelector('.meses')
const formRecolhaDados = document.querySelector('.av-getData')
const table = document.querySelector('.av-table')
const genero = document.getElementsByName('sexo')


const meses = ['Fevereiro',' Março', ' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', 'Dezembro']

btnMeses.addEventListener('click', () => {
    alert(meses)
})

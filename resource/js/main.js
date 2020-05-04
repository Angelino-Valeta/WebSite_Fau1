const btnMeses = document.querySelector('.meses')
const formRecolhaDados = document.querySelector('.av-getData')
const table = document.querySelector('.av-table')
const genero = document.getElementsByName('sexo')


const meses = ['Fevereiro',' Março', ' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', 'Dezembro']

btnMeses.addEventListener('click', () => {
    alert(meses)
})

/*Recolha dados */
const addDados = (n,nome, sexo, idade, nota) => {
    //console.log(nome)
   // console.log(sexo)
   // console.log(idade)
   // console.log(nota)

    if(genero[0].checked){
        sexo = 'Masculino'
    }
    if(genero[1].checked){
        sexo = 'Feminino'
    }
 
    const templateTable = `
    <tr>
        <td>${n}</td>
        <td>${nome}</td>
        <td>${sexo}</td>
        <td>${idade}</td>
        <td>${nota}</td>
    </tr>
    `
    table.innerHTML += templateTable
}
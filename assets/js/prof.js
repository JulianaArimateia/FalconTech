const filtroProf = document.querySelector('#filtro_prof')
const tabela = document.querySelector('#tabela')
const linhas = tabela.querySelectorAll('tr')

filtroProf.addEventListener('input', function(){

    let filtro = filtroProf.value.toLowerCase()

    if(filtro.length > 0){

    }

    for(i = 0 ; i < linhas.length;i++){
        let linha = linhas[i]

        let conteudo = linha.textContent.toLowerCase()

        if(conteudo.includes(filtro)){
            linha.classList.remove('nao')
        } else {
            linha.classList.add('nao')
        }
    }

})

const formProf = document.querySelector('#form_prof')
const horarioInput = document.querySelector('#horario')
const aulaInput = document.querySelector('#aula')
const salaInput = document.querySelector('#sala')
const dataInput = document.querySelector('#data')
const listaErros = document.querySelector('#lista_erros')

formProf.addEventListener('submit', function(e){

    e.preventDefault()

    let erros = verificarDados()

    listaErros.innerHTML = ``

    if (erros.length > 0) {
        variosErros(erros)
        return
    }

    adicionarAula()

})

// CRIAR LISTA DE ERRO
function variosErros(erro) {

    for (i = 0; i < erro.length; i++) {
        let erros = document.createElement('li')
        erros.textContent = erro[i]

        listaErros.appendChild(erros)

    }
}
// ------------------------

// VERIFICAR ERROS
function verificarDados() {
    let erro = []
    if (horarioInput.value == '') {
        erro.push('Digite o horario de aula')
    }
    if (aulaInput.value == '') {
        erro.push('Digite qual a aula')
    }
    if (salaInput.value == '') {
        erro.push('Digite a sala que será utilizada')
    }
    if (dataInput.value == '') {
        erro.push('Digite a data da aula')
    }
    return erro
}



function adicionarAula(){
    let horario = horarioInput.value
    let aula = aulaInput.value
    let sala = salaInput.value
    let data = dataInput.value

    let linha = document.createElement('tr')

    linha.innerHTML = `
    <th>${horario}</th>
    <th>${aula}</th>
    <th>${sala}</th>
    <th>${data}</th>
    `

    tabela.appendChild(linha)
}
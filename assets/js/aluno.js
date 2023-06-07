const filtroAluno = document.querySelector('#filtro_aluno')
const tabela = document.querySelector('#tabela')
const linhas = tabela.querySelectorAll('tr')

filtroAluno.addEventListener('input', function(){

    let filtro = filtroAluno.value.toLowerCase()

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
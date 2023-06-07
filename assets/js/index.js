const formLogin = document.querySelector('#form_login')

const usuario = document.querySelector('#usuario_login')
const senha = document.querySelector('#senha_login')

const listaErros = document.querySelector('#lista_erros')

//  EXECUÇAO DO LOGIN

formLogin.addEventListener('submit', function (e) {

    e.preventDefault()

    let erros = verificarDados()

    listaErros.innerHTML = ``

    if (erros.length > 0) {
        variosErros(erros)
        return
    }

    if (usuario.value == 'professor') {
        location.assign('paginas/professor.html')
    } else {
        location.assign('paginas/aluno.html')
    }

})

// ------------------------

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
    if (senha.value == '') {
        erro.push('Digite sua senha')
    }
    if (usuario.value == '') {
        erro.push('Digite seu usuario')
    }
    return erro
}

let usuarios = [
    { id: 1, nome: "Usuário 1", cadastro: "usuario1", senha: "senha1" },
    { id: 2, nome: "Usuário 2", cadastro: "usuario2", senha: "senha2" },
    { id: 3, nome: "Usuário 3", cadastro: "usuario3", senha: "senha3" }
];


let usuarioLogado = null;


function efetuarLogin(cadastro, senha) {
    
    if (usuarioLogado) {
        console.log("Usuário já está logado.");
        return;
    }

    
    const usuario = usuarios.find(u => u.cadastro === cadastro && u.senha === senha);

    if (usuario) {
        usuarioLogado = usuario;
        console.log("Login efetivado. Bem-vindo, " + usuario.nome + "!");
    } else {
        console.log("Dados de login inválidos. Tente novamente.");
    }
}

in
function consultarDados() {
    // Verifica se o usuário está logado
    if (!usuarioLogado) {
        console.log("É necessário efetuar login para consultar dados.");
        return;
    }

    console.log("Consultando dados para o usuário: " + usuarioLogado.nome);
    
}


efetuarLogin("usuario1", "senha1");


consultarDados();

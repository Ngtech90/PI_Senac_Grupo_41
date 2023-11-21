let dadosArmazenados = {
    alertas: [
        { tipo: 'Temperatura', limite: 30 },
        { tipo: 'Umidade', limite: 60 }
    ],
    parametros: {
        coleta: ['Temperatura', 'Umidade'],
        interpretacao: true,
        ilustracao: false
    }
};


function defineParametros() {
    console.log("Por favor clique aqui para criar um alerta");

    
    console.log("Quais parâmetros deseja armazenar?");


    let novosParametros = {
        alerta: { tipo: 'Pressão', limite: 100 },
        coleta: ['Pressão', 'Luminosidade'],
        interpretacao: true,
        ilustracao: true
    };

    if (verificarExistenciaAlerta(novosParametros.alerta)) {
    
        console.log("O sistema já possui um alerta com os mesmos parâmetros solicitados, este alerta já existe.");
        return;
    }

    
    armazenarAlerta(novosParametros.alerta);

   
    armazenarParametros(novosParametros);

    
    console.log("Novos parâmetros de alerta estão criados!");
}


function verificarExistenciaAlerta(novoAlerta) {
    return dadosArmazenados.alertas.some(alerta => alerta.tipo === novoAlerta.tipo && alerta.limite === novoAlerta.limite);
}


function armazenarAlerta(novoAlerta) {
    dadosArmazenados.alertas.push(novoAlerta);
}


function armazenarParametros(novosParametros) {
    dadosArmazenados.parametros.coleta = novosParametros.coleta;
    dadosArmazenados.parametros.interpretacao = novosParametros.interpretacao;
    dadosArmazenados.parametros.ilustracao = novosParametros.ilustracao;
}


function acionarFuncaoDefine() {
    console.log("Acionando a função DEFINE...");
    defineParametros();
}
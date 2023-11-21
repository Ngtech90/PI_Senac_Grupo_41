


let dadosDeOutrosDispositivos = {
    temperatura: [22, 23, 24, 25, 26],
    umidade: [60, 58, 55, 57, 59]
};


function enviarDadosParaIlustra(dados) {
    
    console.log("3. O sistema envia os dados para a função ILUSTRA (UC03):", dados);
}


function acionarFuncaoDemanda() {
    console.log("1. O Ator aciona a função DEMANDA (UC02).");

    
    console.log("2. O sistema solicita os dados de outros dispositivos conectados.");

    
    let dadosColetados = coletarDadosDeOutrosDispositivos();

    
    enviarDadosParaIlustra(dadosColetados);
}


function coletarDadosDeOutrosDispositivos() {
    // Simulação de coleta de dados
    return dadosDeOutrosDispositivos;
}

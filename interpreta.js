


let dadosCaptados = {
    temperatura: [25, 26, 27, 28, 29],
    umidade: [50, 48, 45, 47, 49]
};


function interpretaDados(dados) {
    if (!dados || !dados.temperatura || !dados.umidade) {
       
        console.log("Dados não encontrados, por favor tente novamente!");
        return;
    }


    let analise = {
        mediaTemperatura: calcularMedia(dados.temperatura),
        maximoUmidade: Math.max(...dados.umidade),
        minimoUmidade: Math.min(...dados.umidade)
    };

    console.log("Podemos assim concluir que:");
    console.log(`- Média de Temperatura: ${analise.mediaTemperatura}`);
    console.log(`- Máximo de Umidade: ${analise.maximoUmidade}`);
    console.log(`- Mínimo de Umidade: ${analise.minimoUmidade}`);

}

function calcularMedia(dados) {
    return dados.reduce((acc, val) => acc + val, 0) / dados.length;
}

function acionarFuncaoInterpreta() {
    console.log("Por favor clique aqui se deseja realizar a análise de dados");

    interpretaDados(dadosCaptados);
}


function alternativo1() {
}

E
alternativo1();




let dadosColetados = {
    temperatura: [25, 26, 27, 28, 29],
    umidade: [50, 48, 45, 47, 49]
};


function interpretarDados(tipoDado) {
    if (!dadosColetados.hasOwnProperty(tipoDado)) {
        console.log("Erro: Tipo de dado não reconhecido.");
        return null;
    }

    
    return dadosColetados[tipoDado].map(valor => valor * 2);
}


function criarGraficosETabelas(tipoDado) {
   
    console.log(`Gráfico de ${tipoDado}: `, dadosColetados[tipoDado]);
    console.log(`Tabela de ${tipoDado}: `, interpretarDados(tipoDado));
}


function acionarFuncaoDemanda() {
    console.log("1. O Ator aciona a função DEMANDA.");

   
    console.log("2. O sistema aciona a função de COLETA.");

  
    console.log("3. O sistema aciona a função de INTERPRETA.");

    
    let tiposDadosDisponiveis = Object.keys(dadosColetados);

    
    let tipoDadoEscolhido = tiposDadosDisponiveis[0];

   
    console.log(`Visualizando dados para ${tipoDadoEscolhido}:`);
    criarGraficosETabelas(tipoDadoEscolhido);
}


function alternativo1() {
    console.log("Fluxo Alternativo 1: O sistema não reconhece os dados coletados e a aplicação é encerrada.");
}


function alternativo2() {
    console.log("Fluxo Alternativo 2: O ator opta por visualizar dados diferentes e a função segue a partir do passo 2 do fluxo principal.");
    acionarFuncaoDemanda();
}


alternativo1();
alternativo2();

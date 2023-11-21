
let dadosColetados = {
    temperatura: [25, 26, 27, 28, 29],
    umidade: [50, 48, 45, 47, 49]
};


function ilustrarDados(tipoDado) {
    
    if (!dadosColetados.hasOwnProperty(tipoDado)) {
        console.log("Erro: Tipo de dado não reconhecido.");
        return;
    }

    
    console.log(`Gráfico de ${tipoDado}: `, dadosColetados[tipoDado]);
}


function demandaIlustracao(usuarioLogado) {
    
    if (!usuarioLogado) {
        console.log("Erro: Usuário não está logado.");
        return;
    }

    // Fluxo principal
    console.log("1. O Ator demanda a ilustração dos dados.");
    console.log("2. O sistema pergunta ao ator quais dados deseja visualizar.");

    
    let tipoDadoEscolhido = "temperatura";

    console.log(`3. O sistema consulta as funções COLETA e INTERPRETA para ${tipoDadoEscolhido}.`);
    console.log("4. O sistema cria um gráfico que ilustra os dados coletados em suas funções.");
    ilustrarDados(tipoDadoEscolhido);
    console.log("5. O sistema mostra ao Ator o gráfico criado.");
}


function alternativo1() {
  
}


function alternativo2() {
    console.log("Caso deseje alterar os dados, por favor retorne ao menu anterior!");
    demandaIlustracao(usuarioLogado);
}


function alternativo3() {
    console.log("Dados não reconhecidos, por favor tente novamente!.");
}


let usuarioLogado = true;


demandaIlustracao(usuarioLogado);


alternativo1();
alternativo2();
alternativo3();



function desenharGrafico(tipo, dados, labels, titulo) {
    
    var canvas = document.getElementById("meuGrafico");

    
    var ctx = canvas.getContext("2d");

    
    var meuGrafico = new Chart(ctx, {
        type: tipo, // tipo do gráfico (bar, line, pie, etc.)
        data: {
            labels: labels, 
            datasets: [{
                label: titulo, 
                data: dados, 
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1 
            }]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false,
        }
    });
}


var dadosExemplo = [10, 20, 30, 40, 50];
var labelsExemplo = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];
var tituloExemplo = "Exemplo de Gráfico";


desenharGrafico("bar", dadosExemplo, labelsExemplo, tituloExemplo);

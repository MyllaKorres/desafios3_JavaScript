//DESAFIOS JAVASCRIPT - DIO

//DESAFIO 1
function botao1()
{
    function gets() // NÃO PRECISA NO DESAFIO, É APENAS PARA RODAR NO CHROME
    {
        let aux = prompt("INSIRA 2 N\u00daMEROS SEPARADOS POR ESPA\u00c7O"); // Ú = \u00da   |   Ç = \u00c7
        return aux;
    }
    
    let line = gets().split(" ");
    let A = parseInt(line[0]);
    let B = parseInt(line[1]);
    let total = A + B; // RESPOSTA DO DESAFIO 1
    console.log("X = " + total);
    alert("X = " + total);// NÃO PRECISA NO DESAFIO
}
//DESAFIO 2

function botao2()
{
    function gets() // NÃO PRECISA NO DESAFIO, É APENAS PARA RODAR NO CHROME
    {
        let aux = prompt("INSIRA UM N\u00daMERO"); // Ú = \u00da
        return aux;
    }

    let valor1 = parseInt(gets());
    let valor2 = parseInt(gets());
    let total = valor1 * valor2; // RESPOSTA DO DESAFIO 2
    console.log("PROD = " + total);
    alert("PROD = " + total);// NÃO PRECISA NO DESAFIO
}

//DESAFIO 3

function botao3()
{
    function gets() // NÃO PRECISA NO DESAFIO, É APENAS PARA RODAR NO CHROME
    {
        let aux = prompt("INSIRA O VALOR SOLICITADO E APERTE ENTER:\n- N. DO COLABORADOR\n- QNT DE HORAS TRAB.\n- VALOR DA HORA TRAB. (USE . )");
        return aux;
    }

    let valor1 = parseInt(gets()); // n. colaborador
    let valor2 = parseInt(gets()); // n. de horas trabalhadas 
    let valor3 = parseFloat(gets()); // valor por horas trabalhadas
    let salary = parseFloat(valor2 * valor3).toFixed(2); // RESPOSTA DESAFIO 3
    console.log("NUMBER = " + valor1); // RESPOSTA DESAFIO 3
    console.log("SALARY = U$ " + salary); // RESPOSTA DESAFIO 3
    alert("NUMBER = " + valor1 + "\nSALARY = U$ " + salary);// NÃO PRECISA NO DESAFIO
}
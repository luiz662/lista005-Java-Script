// Obtém o elemento de saída
const outputDivFor = document.getElementById('output_for');

// Função principal para executar o exercício
function executarExercicioFor(numero) {
    let titulo = `Resultado do Exercício ${numero} (For): `;
    let resultado = "";

    switch (numero) {
        case 1:
            resultado = exercicio1_for();
            break;
        case 2:
            resultado = exercicio2_for();
            break;
        case 3:
            resultado = exercicio3_for(); // Usa prompt
            break;
        case 4:
            resultado = exercicio4_for();
            break;
        case 5:
            resultado = exercicio5_for();
            break;
        case 6:
            resultado = exercicio6_for(); // Usa prompt
            break;
        case 7:
            resultado = exercicio7_for(); // Usa prompt
            break;
        case 8:
            resultado = exercicio8_for();
            break;
        case 9:
            resultado = exercicio9_for(); // Usa prompt
            break;
        case 10:
            resultado = exercicio10_for();
            break;
        case 11:
            resultado = exercicio11_for(); // Usa prompt
            break;
        case 12:
            resultado = exercicio12_for(); // Usa prompt
            break;
        case 13:
            resultado = exercicio13_for(); // Usa prompt
            break;
        case 14:
            resultado = exercicio14_for(); // Usa prompt
            break;
        case 15:
            resultado = exercicio15_for(); // Usa prompt
            break;
        default:
            resultado = "Exercício não encontrado.";
    }

    outputDivFor.innerHTML = `${titulo}\n\n${resultado}`;
}

// --- Funções de Resolução com For ---

// 1) Exibir números de 1 a 20
function exercicio1_for() {
    let resultado = "1 a 20: ";
    for (let i = 1; i <= 20; i++) {
        resultado += i + " ";
    }
    return resultado;
}

// 2) Exibir apenas os números pares de 1 a 50
function exercicio2_for() {
    let pares = "Pares de 1 a 50: ";
    for (let i = 2; i <= 50; i += 2) {
        pares += i + " ";
    }
    return pares;
}

// 3) Tabuada de um número fornecido pelo usuário (de 1 a 10)
function exercicio3_for() {
    const entrada = prompt("[Ex 3 For] Digite um número inteiro para a tabuada:");
    const num = parseInt(entrada);

    if (isNaN(num)) {
        return "Entrada inválida. Tente novamente.";
    }

    let tabuada = `Tabuada do ${num}:\n`;

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        tabuada += `${num} x ${i} = ${resultado}\n`;
    }
    return tabuada;
}

// 4) Calcular a soma dos números de 1 a 100
function exercicio4_for() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    return `A soma dos números de 1 a 100 é: ${soma}`;
}

// 5) Calcular a soma dos números pares de 1 a 200
function exercicio5_for() {
    let somaPares = 0;
    for (let i = 2; i <= 200; i += 2) {
        somaPares += i;
    }
    return `A soma dos números pares de 1 a 200 é: ${somaPares}`;
}

// 6) Ler 10 números inteiros e mostrar o maior e o menor valor
function exercicio6_for() {
    const totalNumeros = 10;
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 1; i <= totalNumeros; i++) {
        const entrada = prompt(`[Ex 6 For] Digite o ${i}º número inteiro de ${totalNumeros}:`);
        const numero = parseInt(entrada);

        if (!isNaN(numero)) {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        } else {
            alert("Entrada inválida. Este número será ignorado.");
            i--; // Decrementa para tentar novamente o mesmo índice
        }
    }
    
    // Verifica se algum número foi lido
    if (maior === -Infinity) {
        return "Nenhum número válido foi inserido.";
    }

    return `Maior valor lido: ${maior}\nMenor valor lido: ${menor}`;
}

// 7) Ler 5 números inteiros e calcule a média aritmética
function exercicio7_for() {
    let soma = 0;
    const totalNumeros = 5;
    let listaNumeros = "";

    for (let i = 1; i <= totalNumeros; i++) {
        const entrada = prompt(`[Ex 7 For] Digite o ${i}º número inteiro:`);
        const numero = parseInt(entrada);

        if (!isNaN(numero)) {
            soma += numero;
            listaNumeros += numero + (i < totalNumeros ? ", " : "");
        } else {
            alert("Entrada inválida. Tente novamente.");
            i--; // Decrementa para tentar novamente o mesmo índice
        }
    }
    
    const media = soma / totalNumeros;
    return `Números lidos: ${listaNumeros}\nSoma: ${soma}\nMédia: ${media.toFixed(2)}`;
}

// 8) Mostrar a sequência de Fibonacci até o décimo termo
function exercicio8_for() {
    const limite = 10;
    let a = 0;
    let b = 1;
    let fibonacci = "Primeiros 10 termos: ";

    for (let i = 1; i <= limite; i++) {
        fibonacci += a + (i < limite ? ", " : "");
        
        let temp = a + b;
        a = b;
        b = temp;
    }
    return fibonacci;
}

// 9) Pedir ao usuário um número inteiro N e mostre os números de 1 até N
function exercicio9_for() {
    const entrada = prompt("[Ex 9 For] Digite um número inteiro (N):");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 1) {
        return "Por favor, insira um número inteiro positivo (N).";
    }

    let resultado = `Números de 1 a ${N}: `;
    for (let i = 1; i <= N; i++) {
        resultado += i + " ";
    }
    return resultado;
}

// 10) Mostre todos os números ímpares entre 100 e 200
function exercicio10_for() {
    let impares = "Ímpares entre 100 e 200: ";
    // Começa em 101, o primeiro ímpar
    for (let i = 101; i < 200; i += 2) {
        impares += i + " ";
    }
    return impares;
}

// 11) Leia 10 idades e calcule a quantidade de pessoas maiores de idade (>= 18)
function exercicio11_for() {
    const totalIdades = 10;
    let maioresDeIdade = 0;

    for (let i = 1; i <= totalIdades; i++) {
        const entrada = prompt(`[Ex 11 For] Digite a ${i}ª idade:`);
        const idade = parseInt(entrada);

        if (!isNaN(idade) && idade >= 0) {
            if (idade >= 18) {
                maioresDeIdade++;
            }
        } else {
            alert("Idade inválida. Tente novamente.");
            i--; // Decrementa para tentar novamente o mesmo índice
        }
    }
    
    return `Total de idades lidas: ${totalIdades}\nQuantidade de pessoas maiores de idade: ${maioresDeIdade}`;
}

// 12) Leia um número inteiro e calcule o seu fatorial
function exercicio12_for() {
    const entrada = prompt("[Ex 12 For] Digite um número inteiro não negativo para o Fatorial:");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 0) {
        return "Por favor, insira um número inteiro não negativo válido.";
    }

    let fatorial = 1;
    let formula = "";

    if (N === 0) {
        return `O Fatorial de 0 (0!) é: 1`;
    }

    for (let i = 1; i <= N; i++) {
        fatorial *= i;
        formula += i + (i < N ? " x " : "");
    }
    
    return `O Fatorial de ${N} (${N}!) é: ${fatorial}\nCálculo: ${formula}`;
}

// 13) Peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número (N)
function exercicio13_for() {
    const entrada = prompt("[Ex 13 For] Digite um número inteiro (N):");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 3) {
        return "Por favor, insira um número inteiro maior ou igual a 3.";
    }

    let somaMultiplos = 0;
    let multiplos = "Múltiplos de 3 somados: ";

    for (let i = 3; i <= N; i++) {
        if (i % 3 === 0) {
            somaMultiplos += i;
            multiplos += i + (i + 3 <= N ? " + " : "");
        }
    }
    
    // Ajusta a string da fórmula caso não tenha somado nada (embora N>=3 garanta 3)
    if (multiplos.endsWith(" + ")) {
        multiplos = multiplos.slice(0, -3);
    } else if (multiplos === "Múltiplos de 3 somados: ") {
        multiplos += "Nenhum";
    }

    return `${multiplos}\nSoma total: ${somaMultiplos}`;
}

// 14) Leia 5 nomes e os exiba em ordem invertida
function exercicio14_for() {
    const totalNomes = 5;
    let nomes = [];
    
    for (let i = 1; i <= totalNomes; i++) {
        const nome = prompt(`[Ex 14 For] Digite o ${i}º nome:`);
        if (nome) {
            nomes.push(nome);
        } else {
            alert("Nome não pode ser vazio. Tente novamente.");
            i--; // Decrementa para tentar novamente o mesmo índice
        }
    }

    let resultadoInvertido = "Nomes na ordem inversa: \n";
    
    // Loop for invertido
    for (let i = nomes.length - 1; i >= 0; i--) {
        resultadoInvertido += `- ${nomes[i]}\n`;
    }
    
    return resultadoInvertido;
}

// 15) Desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário (N)
function exercicio15_for() {
    const entrada = prompt("[Ex 15 For] Digite o número de linhas para a base do triângulo:");
    const N = parseInt(entrada);

    if (isNaN(N) || N < 1 || N > 15) {
        return "Por favor, insira um número inteiro entre 1 e 15 (para não sobrecarregar a tela).";
    }

    let triangulo = "";
    
    // Loop externo: controla as linhas
    for (let i = 1; i <= N; i++) {
        let linha = "";
        
        // Loop interno: adiciona os asteriscos (i asteriscos por linha)
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }
        triangulo += linha + "\n";
    }
    
    return `Triângulo de Base ${N}:\n${triangulo}`;
}
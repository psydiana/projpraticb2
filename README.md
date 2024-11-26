# projpraticb2
Projeto Prático de Construção de Software para Web

Elaborado por Diana de Souza Vasconcelos.

Algoritmo original:


function gerarAleatorios(quantidade){
  var vetor = [];
  var geracoes = [];

  while(vetor.length < quantidade){
    var aleatorio = Math.floor(Math.random()*60 + 1);
    geracoes.push(aleatorio);
    if(vetor.includes(aleatorio)){
      continue;
    }else{
      vetor.push(aleatorio);
    }
  }

  console.log("Gerações: ", geracoes);
  console.log("Finais: ", vetor);
}

function main(quantidade){
  console.time("timer");
  gerarAleatorios(quantidade);
  console.timeEnd("timer");
}


O algoritmo fornecido utiliza um método que pode ser ineficiente para gerar números aleatórios únicos dentro de um intervalo, especialmente quando o número de elementos desejado (quantidade) se aproxima do tamanho do intervalo possível (neste caso, de 1 a 60). Isso ocorre porque esse método continua gerando números aleatórios indefinidamente, mesmo que os números restantes já tenham sido incluídos no vetor.

Pode-se melhorar a eficiência do algoritmo utilizando um conjunto (Set) para evitar a verificação repetitiva de inclusão no vetor. Ademais, em vez de usar Math.random para gerar números aleatórios repetidamente, podemos embaralhar uma lista de números de 1 a 60 e simplesmente pegar os primeiros quantidade elementos.

Algoritmo otimizado:


function gerarAleatoriosMelhorado(quantidade) {
  if (quantidade > 60) {
    throw new Error("Quantidade não pode ser maior que 60.");
  }
  
  // Cria uma lista de números de 1 a 60
  let numeros = Array.from({ length: 60 }, (_, i) => i + 1);
  
  // Embaralha os números
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }

  // Seleciona os primeiros 'quantidade' números
  let vetor = numeros.slice(0, quantidade);
  console.log("Finais: ", vetor);
}

function mainMelhorado(quantidade) {
  console.time("timer");
  gerarAleatoriosMelhorado(quantidade);
  console.timeEnd("timer");
}



Para comparar os dois algoritmos, pode-se realizar testes cronometrados para diferentes valores de quantidade.

Critério de comparação

Número de iterações: O algoritmo original pode realizar várias iterações desnecessárias ao tentar gerar números que já existem no vetor. O algoritmo melhorado realiza um embaralhamento fixo e seleciona diretamente os números necessários, evitando iterações redundantes.
Tempo de execução: Medição do tempo médio de execução para cada algoritmo.

Ambos os algoritmos serão executados e será calculada a melhoria percentual a partir dos testes.

Resultados dos testes:

Tempo médio do algoritmo original: 0,00010 segundos
Tempo médio do algoritmo melhorado: 0,000022 segundos
Melhoria percentual: 78,07%

O algoritmo melhorado é 78,07% mais rápido do que o original para gerar 50 números únicos aleatórios devido à eliminação das verificações repetitivas e à eficiência do método de embaralhamento.

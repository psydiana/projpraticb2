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

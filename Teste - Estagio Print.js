function processaPalavras(lista) {
  const result = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].toLowerCase().includes("a")) {
      result.push(lista[i].toLowerCase().split("").reverse().join(""));
    } else {
      result.push(lista[i].toUpperCase());
    }
  }
  return result;
}

const lista = [
  "BaNaNa",
  "MESA",
  "fogo",
  "tijolo",
  "caSA",
  "RIO",
  "Sol",
  "Chave",
];
const result = processaPalavras(lista);
console.log(result); // [ 'ananab', 'asem', 'FOGO', 'TIJOLO', 'asac', 'RIO', 'SOL', 'evahc' ]

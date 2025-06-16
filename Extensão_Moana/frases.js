const frases = [
  "Você é capaz de conquistar qualquer coisa!",
  "Os erros são como bolas de lã. Enroscam, mas você aprende!",
  "Tome um gole d’água. Gatinhos hidratados programam melhor.",
  "Se você não beber agua, eu vou te bater!",
  "Se estiver difícil, mia bem alto e tenta de novo!",
  "Você já sobreviveu a dias piores. Hoje vai ser fácil!"
];

function fraseAleatoria() {
  const index = Math.floor(Math.random() * frases.length);
  return frases[index];
}

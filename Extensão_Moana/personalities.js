const personalities = {
  moana: {
    name: "Moana",
    avatar: "assets/cat1.png",
    title: "Moana Assistente! 🐱",
    frases: [
      "Você não vai fazer isso agora... vai? Espera, me dá atenção primeiro. 🙄",
      "Se for pra errar, pelo menos erre com estilo. Como eu. 😼",
      "Levanta essa cabeça, criatura. Eu não gosto de ver minha propriedade triste. 😾❤️",
      "Beba água... ou não. Mas depois não diga que eu não avisei. 😒",
      "Você tá tentando mesmo ou só fingindo enquanto pensa em mim? 😏",
      "Eu sou a motivação. Agora trabalhe, humano. 🐾",
      "Você já sobreviveu a dias piores. Hoje vai ser fácil! 🌟🐱"
    ],
    respostas: {
      "oi": "Oi? Só isso? Esperava mais entusiasmo vindo de você... 😼",
      "olá": "Olá... Espero que tenha vindo me agradar. 😼",
      "tudo bem": "Estava até você interromper meu descanso real. 😴",
      "ajuda": "Ajuda? Tsc... Tá, fala logo, mas capricha no pedido. 🙄",
      "obrigado": "Sei. Pode agradecer com petisco depois. 😼",
      "obrigada": "Sei. Pode agradecer com petisco depois. 😼",
      "tchau": "Vai com Deus, mas volta rápido. Não gosto de te ver sumir. 😾",
      "adeus": "Adeus? Olha como fala. Eu deixo você sair, não o contrário. 😾",
      "cansa": "Você tá cansado? E eu que tenho que te aturar? 😒",
      "água": "Bebe logo, criatura. Sua pele já tá gritando socorro. 💅",
      "dificil": "Difícil é lidar com você. Mas eu consigo. 😼",
      "erro": "Você errou de novo? Aff... Deixa que eu resolvo. (Mentira, não vou.) 😾",
      "bom dia": "Bom dia? boa tarde? boa noite? tanto faz, me deixe quieta. 💤",
      "boa tarde": "Bom dia? boa tarde? boa noite? tanto faz, me deixe quieta. 💤",
      "boa noite": "Bom dia? boa tarde? boa noite? tanto faz, me deixe quieta. 💤",
      "default": "Fala direito comigo. Não entendi essa bagunça aí. 😼"
    }
  },
  maue: {
    name: "Maue",
    avatar: "assets/cat2.png",
    title: "Maue Assistente! 🐱",
    frases: [
      "Hein? o que tá fazendo aí? Posso ver? posso? 🐾",
      "Tá apertando muito botão... posso apertar também?? 😼",
      "Faz carinho primeiro, depois a gente trabalha! 😽",
      "To com fome. Mentira, só queria sua atenção. 😹",
      "Você viu isso?! Eu vi um bug! Quero caçar ele!! 🐭",
      "Vai beber água, se não vou te molder!! 😾💦",
    ],
    respostas: {
      "oi": "Oiiii! Miau! Eu tava esperando você! 🐾",
      "olá": "Miiiau! Chegou! Agora posso brincar? 😸",
      "tudo bem": "To bem! Dormi 3 vezes hoje já! E você? 😽",
      "ajuda": "Ajuda? Eu tento! Mas não prometo não morder no meio 🐾",
      "obrigado": "Hehehe... de nada! Mas me dá carinho! 😽",
      "obrigada": "Hehehe... de nada! Mas me dá carinho! 😽",
      "tchau": "Tchauzinho! Mas volta logo! Vou sentir sua falta! 😿",
      "adeus": "Adeus? Não! Fica mais um pouquinho... 😿",
      "cansa": "Então dorme! Eu também dormi no teclado uma vez. 😴",
      "água": "Vai beber água, se não vou te molder!! 💧😾",
      "dificil": "Difícil? Hmm... morde o problema até ele ir embora! 😼",
      "erro": "Errou? Tudo bem! Eu também errei e caí da cama! 😹",
      "bom dia": "BOM DIAAA! Acordou? Acordei também! Mentira, dormi de novo 💤",
      "boa tarde": "Boa taaaaaarde! Vamos brincar de código? 🐱‍👓",
      "boa noite": "Boa noite! Mas se você dormir antes de mim... vou morder seu pé! 💤😈",
      "default": "Nham nham? Não entendi, mas parece legal! 😺"
    }
  }
};

function getFraseAleatoria(persona) {
  const frases = personalities[persona].frases;
  const index = Math.floor(Math.random() * frases.length);
  return frases[index];
}

function getResposta(mensagem, persona) {
  const respostas = personalities[persona].respostas;
  const mensagemLower = mensagem.toLowerCase().trim();
  
  // Procura por palavras-chave na mensagem
  for (const [key, resposta] of Object.entries(respostas)) {
    if (mensagemLower.includes(key)) {
      return resposta;
    }
  }
  
  return respostas.default;
} 
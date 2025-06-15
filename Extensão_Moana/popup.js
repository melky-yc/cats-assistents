let assistenteAtual = "moana";

document.getElementById("frase").innerText = fraseAleatoria();

document.getElementById("sugestaoBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    const title = tab.title;
    const sugestao = `Meu papai ainda tá trabalhando nisso...`;
    // Que tal pesquisar mais sobre: "${title.split(' ')[0]}"?
    document.getElementById("sugestao").innerText = sugestao;
  });
});


// ========== ATALHOS ==========

function carregarAtalhos() {
  const lista = document.getElementById("listaAtalhos");
  lista.innerHTML = "";

  chrome.storage.local.get("atalhos", (res) => {
    const atalhos = res.atalhos || [];
    atalhos.forEach(({ nome, url }, index) => {
      const container = document.createElement("div");
      container.className = "atalho-container";

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.innerText = nome;
      link.className = "atalho-item";

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.title = "Remover atalho";
      removeBtn.onclick = (e) => {
        e.preventDefault();
        removerAtalho(index);
      };

      container.appendChild(link);
      container.appendChild(removeBtn);
      lista.appendChild(container);
    });
  });
}

function removerAtalho(index) {
  chrome.storage.local.get("atalhos", (res) => {
    const atalhos = res.atalhos || [];
    atalhos.splice(index, 1);
    chrome.storage.local.set({ atalhos }, carregarAtalhos);
  });
}

document.getElementById("adicionarAtalho").addEventListener("click", () => {
  const nome = document.getElementById("nomeAtalho").value;
  const url = document.getElementById("urlAtalho").value;

  if (nome && url) {
    chrome.storage.local.get("atalhos", (res) => {
      const atalhos = res.atalhos || [];
      atalhos.push({ nome, url });
      chrome.storage.local.set({ atalhos }, carregarAtalhos);
    });

    document.getElementById("nomeAtalho").value = "";
    document.getElementById("urlAtalho").value = "";
  }
});

// ========== HISTÓRICO ==========

function carregarUltimoSite() {
  chrome.history.search({ text: "", maxResults: 1 }, (resultados) => {
    if (resultados && resultados.length > 0) {
      const ultimo = resultados[0];
      const elemento = document.getElementById("ultimoSite");
      elemento.innerHTML = `<a href="${ultimo.url}" target="_blank">${ultimo.title}</a>`;
    } else {
      document.getElementById("ultimoSite").innerText = "Nada encontrado.";
    }
  });
}

// ========== INÍCIO ==========

document.addEventListener("DOMContentLoaded", () => {
  // Primeiro carrega os dados
  carregarAtalhos();
  carregarUltimoSite();
  
  // Depois atualiza o assistente
  atualizarAssistente(assistenteAtual);
  
  // Configura os event listeners
  document.getElementById("moana-btn").addEventListener("click", () => {
    assistenteAtual = "moana";
    atualizarAssistente(assistenteAtual);
  });

  document.getElementById("maue-btn").addEventListener("click", () => {
    assistenteAtual = "maue";
    atualizarAssistente(assistenteAtual);
  });

  // Atualiza a frase a cada 30 segundos
  setInterval(() => {
    document.getElementById("frase").innerText = getFraseAleatoria(assistenteAtual);
  }, 30000);

  // Event listener para enviar mensagem
  document.getElementById("enviarMensagem").addEventListener("click", () => {
    const mensagem = document.getElementById("mensagem").value.trim();
    if (!mensagem) return;

    const resposta = document.getElementById("resposta");
    resposta.textContent = getResposta(mensagem, assistenteAtual);
    resposta.classList.add("ativa");

    document.getElementById("mensagem").value = "";
  });

  // Permitir enviar mensagem com Enter
  document.getElementById("mensagem").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("enviarMensagem").click();
    }
  });
});

function atualizarAssistente(persona) {
  const assistente = personalities[persona];
  document.querySelector(".avatar").src = assistente.avatar;
  document.querySelector("h2").innerText = assistente.title;
  document.getElementById("frase").innerText = getFraseAleatoria(persona);
  
  // Atualiza o tema
  document.body.className = `tema-${persona}`;
}

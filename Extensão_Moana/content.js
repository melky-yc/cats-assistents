const titulo = document.title;
const corpo = document.body.innerText.slice(0, 1000);

chrome.runtime.sendMessage({
  type: "CONTEUDO_PAGINA",
  dados: {
    titulo,
    corpo
  }
});
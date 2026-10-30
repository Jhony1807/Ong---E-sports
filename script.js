/* COMMIT feat(js): botão mostrar/ocultar informações (Funcionalidade 2)
   O que faz: ao clicar no botão, o painel aparece; ao clicar de novo, some.
   Conceitos: const (guarda um elemento), function (bloco reutilizável),
   if/else (decide), getElementById (acha o elemento pelo id do HTML),
   textContent (troca o texto), addEventListener (espera o clique). */
// FUNCIONALIDADE 2: mostrar/ocultar informações (página Sobre)
const botao = document.getElementById("btnMaisInfo");
const painel = document.getElementById("infoExtra");

// Função chamada a cada clique: alterna entre mostrar e ocultar
function alternarInfo() {
  if (painel.style.display === "none") {
    painel.style.display = "block";            // mostra o painel
    botao.textContent = "Ocultar informações"; // muda o texto do botão
    botao.setAttribute("aria-expanded", "true");
  } else {
    painel.style.display = "none";             // oculta o painel
    botao.textContent = "Ver informações institucionais";
    botao.setAttribute("aria-expanded", "false");
  }
}

// Registra o evento de clique
botao.addEventListener("click", alternarInfo);

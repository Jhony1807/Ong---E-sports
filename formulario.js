/* COMMIT feat(js): validação do formulário de inscrição (Funcionalidade 1)
   O que faz: ao enviar, confere cada campo e mostra erro ou confirmação na página.
   Conceitos: addEventListener("submit") espera o envio; preventDefault() impede
   recarregar a página; value lê o que a pessoa digitou; trim() tira espaços das
   pontas; length conta caracteres; if/else if testa uma regra por vez;
   textContent escreve a mensagem no HTML. Nada é enviado de verdade. */
// FUNCIONALIDADE 1: formulário de inscrição validado (página Contato)
const formulario = document.getElementById("formContato");
const areaMensagem = document.getElementById("mensagemForm");

// Função executada quando o formulário é enviado
function validarFormulario(evento) {
  evento.preventDefault(); // impede o envio e o recarregamento da página

  // Lê os valores e tira espaços extras com trim()
  const nome = document.getElementById("nome").value.trim();
  const campoEmail = document.getElementById("email");
  const email = campoEmail.value.trim();
  const jogo = document.getElementById("jogo").value;
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Cada if verifica uma regra; o primeiro erro encontrado é mostrado
  if (nome.length < 3) {
    mostrar("Erro: o nome precisa ter pelo menos 3 caracteres.", "erro");
  } else if (email === "" || !campoEmail.checkValidity()) {
    mostrar("Erro: digite um e-mail válido, como nome@email.com.", "erro");
  } else if (jogo === "") {
    mostrar("Erro: escolha o jogo para a sua inscrição.", "erro");
  } else if (assunto === "") {
    mostrar("Erro: o assunto não pode ficar vazio.", "erro");
  } else if (mensagem.length < 10) {
    mostrar("Erro: a mensagem precisa ter pelo menos 10 caracteres.", "erro");
  } else {
    mostrar("Inscrição para " + jogo + " recebida! (SIMULAÇÃO: nenhum e-mail foi enviado e nenhum dado foi guardado.)", "ok");
    formulario.reset();
  }
}

// Escreve a mensagem na página (textContent) e define a cor pela classe
function mostrar(texto, tipo) {
  areaMensagem.textContent = texto;
  areaMensagem.className = "mensagem " + tipo;
}

// Registra o evento submit
formulario.addEventListener("submit", validarFormulario);

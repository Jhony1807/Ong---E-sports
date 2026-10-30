# Ong---E-sports
TRABALHO ACADÊMICO - DESENVOLVIMENTO FRONT END | ONG E-sports Projeto final

Instituto Level Up Periferia

Site institucional de uma ONG fictícia de médio porte que ajuda crianças e adolescentes da periferia de São Paulo a entrar no cenário dos e-sports, com treino de Counter-Strike 2 e Valorant, apoio escolar e orientação de carreira.

Projeto Integrador de Fundamentos da Web e Desenvolvimento Front-end (HTML, CSS e JavaScript), disciplina do professor Marcelo de Freitas Pintaud. Feito com HTML5, CSS3 e JavaScript puro, sem frameworks e sem backend.

Aviso: é um protótipo acadêmico. A ONG, os números de impacto e as informações institucionais são fictícios. Nenhuma mensagem é enviada e nenhum dado é coletado ou armazenado.

Integrantes
<a href="https://www.linkedin.com/in/jonata-alves-borsari/" target="_blank" rel="noopener">Jonata Alves Borsari</a>
<a href="https://www.linkedin.com/in/joão-frazão-zanon/" target="_blank" rel="noopener">Joao Frazon Zanon</a>
Objetivo

Divulgar a causa da ONG, apresentar seus projetos, explicar os dois jogos treinados (história, como se joga e principais organizações) e receber inscrições simuladas de jovens e voluntários.

Causa e público
Causa: dar acesso a treino, equipamentos e orientação para jovens talentosos nos games que não têm essas oportunidades.
Público: crianças e adolescentes de 10 a 17 anos de bairros da periferia, suas famílias e escolas públicas parceiras.
Páginas
Arquivo	Conteúdo
index.html	Nome da ONG, causa, apresentação, imagem de destaque, números de impacto e chamadas para participar
sobre.html	História, missão, público atendido, texto "Da lan house ao campeonato" com imagens, objetivos e informações institucionais (botão JS)
cs2.html	Counter-Strike 2: história, como se joga, como pode mudar uma vida, principais organizações (FURIA, MIBR, NAVI, Vitality, FaZe) e quem organiza os campeonatos. Tema laranja
valorant.html	Valorant: mesmo roteiro, com LOUD, FURIA, Sentinels, Paper Rex e Fnatic. Tema vermelho e azul-marinho
projetos.html	Três iniciativas (Centro de Treino, Jogador Estudante e Liga da Quebrada), cada uma com imagem, descrição e forma de contribuir
contato.html	Formulário de inscrição (escolha do jogo), orientações de voluntariado e aviso de envio simulado
Funcionalidades JavaScript

O projeto tem exatamente duas, ambas em arquivos externos e registradas com addEventListener():

Formulário validado (formulario.js, em contato.html): impede o envio com preventDefault(), lê os campos com value e trim() e confere nome (mínimo de 3 caracteres), e-mail em formato válido, jogo escolhido, assunto preenchido e mensagem (mínimo de 10 caracteres). Mostra o erro ou a confirmação simulada na própria página.
Mostrar/ocultar informações (script.js, em sobre.html): o botão "Ver informações institucionais" abre e fecha um painel e troca o próprio texto, quantas vezes for clicado.

O menu e o link "Saiba mais sobre nós" não usam JavaScript: o menu é um <details> e o link é um <a> comum.

Estrutura de arquivos
index.html  sobre.html  cs2.html  valorant.html  projetos.html  contato.html
estilos.css        estilos compartilhados (Flexbox, variáveis de cor e @media)
formulario.js      Funcionalidade 1
script.js          Funcionalidade 2
img/               imagens e ícones do site
README.md
Decisões de design e acessibilidade
Tema escuro de jogo, com variáveis de cor em :root. Cada página de jogo troca só três variáveis (body.tema-cs2 e body.tema-valorant).
Layout com Flexbox e uma regra @media (max-width: 700px) que empilha as colunas e alarga os botões no celular.
HTML semântico (header, nav, main, section, article, footer), títulos em ordem, alt em todas as imagens e label ligado a cada campo.
Link "Pular para o conteúdo", foco visível e uso por teclado em menu, botões e formulário.
Os arquivos têm comentários COMMIT que explicam cada parte do código.
Como executar

Baixe a pasta, mantenha os arquivos juntos e abra index.html em qualquer navegador. Não precisa de instalação nem de servidor.

Testes recomendados
Navegar pelas seis páginas pelo menu e conferir links e imagens.
Ver o site em cerca de 390 px (celular) e 1280 px (desktop), sem rolagem horizontal.
Clicar várias vezes no botão de sobre.html e ver o painel abrir e fechar.
Enviar o formulário com nome curto, e-mail inválido, jogo não escolhido, assunto vazio e mensagem curta, e depois com tudo correto.
Usar Tab, Enter e Espaço para navegar e acionar os controles.

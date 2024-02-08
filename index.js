const perguntas = [
  {
    pergunta: "Qual país venceu mais vezes a Copa do Mundo de Futebol?",
    respostas: [
      "Brasil",
      "Alemanha",
      "Itália",
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador detém o recorde de mais gols marcados em uma única edição da Copa do Mundo?",
    respostas: [
      "Pelé",
      "Miroslav Klose",
      "Just Fontaine",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o atual vencedor da Liga dos Campeões da UEFA?",
    respostas: [
      "Real Madrid",
      "Bayern de Munique",
      "Chelsea",
    ],
    correta: 2
  },
  {
    pergunta: "Qual jogador ganhou o maior número de prêmios Bola de Ouro da FIFA?",
    respostas: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Michel Platini",
    ],
    correta: 1
  },
  {
    pergunta: "Em que ano a Copa do Mundo de Futebol foi realizada pela primeira vez?",
    respostas: [
      "1926",
      "1930",
      "1934",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o maior estádio de futebol do mundo em capacidade?",
    respostas: [
      "Estádio Azteca (México)",
      "Camp Nou (Espanha)",
      "Estádio Rungrado 1º de Maio (Coreia do Norte)",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o jogador com mais gols marcados em jogos da Seleção Brasileira de Futebol?",
    respostas: [
      "Pelé",
      "Romário",
      "Neymar",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o único jogador a vencer a Copa do Mundo de Futebol como técnico e como jogador?",
    respostas: [
      "Franz Beckenbauer",
      "Diego Maradona",
      "Zinedine Zidane",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o único país a ter participado de todas as edições da Copa do Mundo de Futebol?",
    respostas: [
      "Alemanha",
      "Brasil",
      "Uruguai",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o recorde de gols marcados por um único jogador em uma partida de Copa do Mundo?",
    respostas: [
      "5 gols",
      "6 gols",
      "7 gols",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos spam')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

    
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }



    quizItem.querySelector('dl').appendChild(dt)
    }
  
quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
quiz.appendChild(quizItem)
}
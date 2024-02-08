const perguntas = [
    {
      pergunta: "Qual é a principal estrutura de controle de fluxo em JavaScript?",
      respostas: [
        "if-else",
        "switch",
        "for loop",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "variable x = 5;",
        "int x = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o valor de um caractere em uma posição específica de uma string",
        "Remove o último caractere de uma string",
        "Substitui todos os caracteres de uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adiciona um evento a um elemento HTML",
        "Remove um evento de um elemento HTML",
        "Altera o estilo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
      respostas: [
        "Converte uma string em minúsculas",
        "Converte uma string em maiúsculas",
        "Inverte uma string",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'splice()' em JavaScript?",
      respostas: [
        "Remove elementos de um array e/ou adiciona novos elementos",
        "Inverte a ordem dos elementos em um array",
        "Converte um array em uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma função anônima em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "const myFunction = function() {}",
        "const myFunction() {}",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '%' faz em JavaScript?",
      respostas: [
        "Divide dois números",
        "Retorna o resto da divisão entre dois números",
        "Multiplica dois números",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseFloat()' faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Converte uma string em um número de ponto flutuante",
        "Arredonda um número para o inteiro mais próximo",
      ],
      correta: 1
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
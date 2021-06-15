const imagem = document.querySelector('#personagem1');
const nome = document.querySelector('#nome1');

const carregaPersonagemAleatorio = () => {
  let index = Math.floor(Math.random() * 671);
  return fetch(`https://rickandmortyapi.com/api/character/${index}`, {
    method:'GET', 
    headers: {
      "Accept": 'application/json',
      "Content-type":'application/json'
    }
  }).then((response) => response.json()).then((data) => {
     imagem.src = data.image;
     imagem.alt = data.name;
     nome1.innerHTML = data.name;
  });
}
carregaPersonagemAleatorio();

const imagem2 = document.querySelector('#personagem2');
const nome2 = document.querySelector('#nome2');

const carregaPersonagemAleatorio2 = () => {
  let index = Math.floor(Math.random() * 671);
  return fetch(`https://rickandmortyapi.com/api/character/${index}`, {
    method:'GET', 
    headers: {
      "Accept": 'application/json',
      "Content-type":'application/json'
    }
  }).then((response) => response.json()).then((data) => {
     imagem2.src = data.image;
     imagem2.alt = data.name; 
     nome2.innerHTML = data.name;
  });
}
carregaPersonagemAleatorio2();

const imagem3 = document.querySelector('#personagem3');
const nome3 = document.querySelector('#nome3');

const carregaPersonagemAleatorio3 = () => {
  let index = Math.floor(Math.random() * 671);
  return fetch(`https://rickandmortyapi.com/api/character/${index}`, {
    method:'GET', 
    headers: {
      "Accept": 'application/json',
      "Content-type":'application/json'
    }
  }).then((response) => response.json()).then((data) => {
     imagem3.src = data.image;
     imagem3.alt = data.name; 
     nome3.innerHTML = data.name;
  });
}
carregaPersonagemAleatorio3();

const imagem4 = document.querySelector('#personagem4');
const nome4 = document.querySelector('#nome4');

const carregaPersonagemAleatorio4 = () => {
  let index = Math.floor(Math.random() * 671);
  return fetch(`https://rickandmortyapi.com/api/character/${index}`, {
    method:'GET', 
    headers: {
      "Accept": 'application/json',
      "Content-type":'application/json'
    }
  }).then((response) => response.json()).then((data) => {
     imagem4.src = data.image;
     imagem4.alt = data.name; 
     nome4.innerHTML = data.name;
  });
}
carregaPersonagemAleatorio4();




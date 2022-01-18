const buttonCriarCarta = document.querySelector('#criar-carta');
const localCartaMisteriosa = document.querySelector('#carta-gerada');
const inputCarta = document.querySelector('#carta-texto');
// const mainCarta = document.querySelector('.main-carta');

const criarCarta = () => {
  localCartaMisteriosa.innerHTML = '';
  const conteudoCartaMisteriosa = inputCarta.value.split(' ');
  const palavras = conteudoCartaMisteriosa;
  if (!inputCarta.value || inputCarta.value === ' ') {
    localCartaMisteriosa.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  for (let index = 0; index < palavras.length; index += 1) {
    const palavra = palavras[index];
    const palavraDaCarta = document.createElement('span');
    palavraDaCarta.innerText = palavra;
    localCartaMisteriosa.appendChild(palavraDaCarta);
  }
};

buttonCriarCarta.addEventListener('click', criarCarta);
 


/* const criarContadorHTML = () => {
  const contador = document.createElement('p');
  contador.id = 'carta-contador';
  return mainCarta.appendChild(contador);
};

const contadorDePalavras = () => {
  const numeroDePalavras = inputCarta.value.split('');
  let contador = 0;
  for (let index = 0; index < numeroDePalavras.length; index += 1) {
    contador = index + 1;
  }
  return contador;
};
 */
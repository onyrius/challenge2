const grupoMagazineClasse = ['newspaper', 'magazine1', 'magazine2'];
const grupoBigClasse = ['medium', 'big', 'reallybig'];
const grupoSkrewClasse = ['skewleft', 'skewright'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const randomizar = (grupo) => grupo[Math.floor(Math.random() * grupo.length)];
const buttonCriarCarta = document.querySelector('#criar-carta');
const localCartaMisteriosa = document.querySelector('#carta-gerada');
const inputCarta = document.querySelector('#carta-texto');
const mainCarta = document.querySelector('.main-carta');
const allClasseName = [...grupoMagazineClasse, ...grupoRotacao, ...grupoSkrewClasse, ...grupoBigClasse];
console.log(allClasseName);
/** Source: https://pt.stackoverflow.com/questions/336979/como-fazer-um-sorteio-de-palavras-e-das-letras-ao-clicar-no-bot%C3%A3o-iniciar */
//  aleatorio(grupoMagazineClasse), aleatorio(grupoRotacao), aleatorio(grupoSkrewClasse);
const addClassName = (palavraDaCarta) => {
  allClasseName.map((className) => {
    if (!palavraDaCarta.className && palavraDaCarta.className !== className) {
      palavraDaCarta.className += `${randomizar(grupoBigClasse)}`;
      palavraDaCarta.className += ` ${randomizar(grupoRotacao)}`;
      palavraDaCarta.className += ` ${randomizar(grupoMagazineClasse)}`;
      palavraDaCarta.className += ` ${randomizar(grupoSkrewClasse)}`;
      return palavraDaCarta;
    }
    return palavraDaCarta;
  });
};

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
    addClassName(palavraDaCarta);
    console.log(palavra);
    console.log(palavraDaCarta.className);
    localCartaMisteriosa.appendChild(palavraDaCarta);
    console.log(localCartaMisteriosa);
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
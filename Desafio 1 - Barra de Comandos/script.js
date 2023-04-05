let contadorCliques = 0;
const maxCliques = 10;

//função que é chamada quando ocorre um clique na página
function cliquePagina() {
  contadorCliques++;

  if (contadorCliques >= maxCliques) {
    //exibe imagem em posição aleatória
    const imagem = document.createElement('img');
    imagem.src = '/source/Danonangus.png';
    imagem.style.position = 'absolute';
    imagem.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
    imagem.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    document.body.appendChild(imagem);

    //reproduz o áudio com volume -6.0dB
    const audio = new Audio('/source/Danonangus.mp3');
    audio.volume = 0.25;
    audio.play();

    //quando o áudio terminar, remove a imagem e reinicia o contador de cliques
    audio.addEventListener('ended', () => {
      document.body.removeChild(imagem);
      contadorCliques = 0;
    });
  }
}

document.addEventListener('click', cliquePagina);



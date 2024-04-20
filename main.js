const menu = document.getElementById('burguer');
const lista = document.getElementById('itens');

function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.lista', { delay: 200, origin: 'left' });
sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.imagem', { delay: 200, origin: 'top' });
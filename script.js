document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  // Animação fade-in das seções ao scroll
  const fadeSections = document.querySelectorAll('.fade-section');

  function checkFade() {
    fadeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // rodar na carga da página também

  // Barber pole girando ao clicar
  const barberPole = document.querySelector('.barber-pole');
  if (barberPole) {
    barberPole.addEventListener('click', () => {
      barberPole.classList.toggle('rotating');
    });
  }

  // Brincadeira: clicar no canto inferior direito
  const brinqDiv = document.createElement('div');
  brinqDiv.style.position = 'fixed';
  brinqDiv.style.bottom = '20px';
  brinqDiv.style.right = '20px';
  brinqDiv.style.width = '50px';
  brinqDiv.style.height = '50px';
  brinqDiv.style.cursor = 'pointer';
  brinqDiv.title = 'Clique aqui para uma surpresa :)';
  // Opcional: deixar invisível mas clicável
  brinqDiv.style.background = 'transparent';

  document.body.appendChild(brinqDiv);

  brinqDiv.addEventListener('click', () => {
    alert("Você está pronto para ficar bonito na próxima balada! 😎✂️");
  });
});

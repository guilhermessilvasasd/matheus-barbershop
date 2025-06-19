document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  // Efeito fade-in nas seções quando entram na tela
  const sections = document.querySelectorAll('.fade-section');

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkSections);
  checkSections();

  // Barber pole girando ao clicar
  const barberPole = document.getElementById('barber-pole');
  barberPole.addEventListener('click', () => {
    if (barberPole.classList.contains('rotating')) {
      barberPole.classList.remove('rotating');
    } else {
      barberPole.classList.add('rotating');
    }
  });

  // Brincadeira: clicar em qualquer canto mostra convite
  function conviteBrincadeira() {
    alert("Quer ficar bonito para aquela balada? Vem pra Matheu's Barbershop!");
  }

  ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(corner => {
    const div = document.createElement('div');
    div.classList.add('click-corner', corner);
    div.style.position = 'fixed';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.zIndex = '9999';
    if(corner.includes('top')) div.style.top = '0';
    else div.style.bottom = '0';
    if(corner.includes('left')) div.style.left = '0';
    else div.style.right = '0';
    div.style.cursor = 'pointer';
    div.style.background = 'transparent';
    div.addEventListener('click', conviteBrincadeira);
    document.body.appendChild(div);
  });
});

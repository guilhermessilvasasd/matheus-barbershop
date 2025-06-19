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

  // Barber pole girando automaticamente (já no CSS)

  // Brincadeira: clicar em qualquer canto mostra convite
  function conviteBrincadeira() {
    alert("Quer ficar bonito para aquela balada? Vem pra Matheu's Barbershop!");
  }

  ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(corner => {
    const div = document.createElement('div');
    div.classList.add('click-corner', corner);
    if(corner.includes('top')) div.style.top = '0';
    else div.style.bottom = '0';
    if(corner.includes('left')) div.style.left = '0';
    else div.style.right = '0';
    div.addEventListener('click', conviteBrincadeira);
    document.body.appendChild(div);
  });
});

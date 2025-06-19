document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  // Barber pole hover para girar
  const barberPole = document.querySelector('.barber-pole');
  if(barberPole) {
    barberPole.addEventListener('mouseenter', () => {
      barberPole.style.animationPlayState = 'running';
    });
    barberPole.addEventListener('mouseleave', () => {
      barberPole.style.animationPlayState = 'paused';
    });
    // Inicialmente pausado
    barberPole.style.animationPlayState = 'paused';
  }

  // Criar botão "Voltar ao topo"
  const btnTopo = document.createElement('button');
  btnTopo.textContent = '↑ Topo';
  btnTopo.id = 'btnTopo';
  btnTopo.style.position = 'fixed';
  btnTopo.style.bottom = '30px';
  btnTopo.style.right = '30px';
  btnTopo.style.padding = '10px 15px';
  btnTopo.style.fontSize = '18px';
  btnTopo.style.border = 'none';
  btnTopo.style.borderRadius = '5px';
  btnTopo.style.backgroundColor = '#D4AF37';
  btnTopo.style.color = '#1a1a1a';
  btnTopo.style.cursor = 'pointer';
  btnTopo.style.display = 'none';
  btnTopo.style.zIndex = '1000';
  document.body.appendChild(btnTopo);

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  // Destaque dos links do menu ao rolar
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('header nav a');

  function highlightMenu() {
    let scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if(scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightMenu);
  highlightMenu();

  // Fade-in das seções ao scroll
  const faders = document.querySelectorAll('section');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('fade-section');
    appearOnScroll.observe(fader);
  });

  // Easter egg divertido ao clicar em cantos da página
  document.body.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const margem = 100; // área em pixels dos cantos

    let mensagem = null;

    if(x < margem && y < margem) {
      mensagem = "Fica na régua, hein! 😎";
    } else if(x > width - margem && y < margem) {
      mensagem = "Vai arrasar naquela balada! 💃";
    } else if(x < margem && y > height - margem) {
      mensagem = "Barba feita, estilo garantido! ✂️";
    } else if(x > width - margem && y > height - margem) {
      mensagem = "Volte sempre para se cuidar! 🔥";
    }

    if(mensagem) {
      alert(mensagem);
    }
  });

});

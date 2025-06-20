document.addEventListener('DOMContentLoaded', () => {
  console.log("Site da Matheu's Barbershop carregado.");

  // ===== [1] SEU CÓDIGO ORIGINAL (SERVIÇOS) =====
  const botoesServicos = document.querySelectorAll('.servico-item button');
  const totalSpan = document.getElementById('total');
  let totalSelecionado = 0;
  const precos = {
    'Corte - R$ 40': 40,
    'Cabelo e Barba - R$ 65': 65,
    'Barba - R$ 25': 25,
    'Sobrancelha - R$ 10': 10,
    'Alisamento - R$ 25': 25,
    'Cabelo Afro - R$ 30': 30,
    'Luzes - R$ 45 a R$ 60': 45,
    'Pezinho - R$ 10': 10
  };
  let servicosSelecionados = new Set();

  botoesServicos.forEach(botao => {
    botao.addEventListener('click', () => {
      const texto = botao.textContent.trim();
      if (servicosSelecionados.has(texto)) {
        servicosSelecionados.delete(texto);
        botao.classList.remove('selecionado');
      } else {
        servicosSelecionados.add(texto);
        botao.classList.add('selecionado');
      }
      totalSelecionado = 0;
      servicosSelecionados.forEach(item => {
        totalSelecionado += precos[item] || 0;
      });
      totalSpan.textContent = totalSelecionado.toFixed(2).replace('.', ',');
    });
  });

  // ===== [2] ANIMAÇÃO DOS TÍTULOS (ORIGINAL) =====
  const titulos = document.querySelectorAll('.titulo-secao');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('crescendo');
      } else {
        entry.target.classList.remove('crescendo');
      }
    });
  }, { threshold: 0.6 });
  titulos.forEach(titulo => observer.observe(titulo));

  // ===== [3] NOVOS AJUSTES (SCROLL SUAVE E MENU ATIVO) =====
  // Highlight do menu durante scroll
  const menuLinks = document.querySelectorAll('.menu a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Scroll suave ao clicar no menu
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });
});

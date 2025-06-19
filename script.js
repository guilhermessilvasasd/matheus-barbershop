document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  // Fade das seções ao rolar
  const sections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Brincadeira ao clicar em qualquer canto
  document.body.addEventListener('click', function(event) {
    // Se clicar em um link ou botão, ignora
    if (event.target.tagName === 'A' || event.target.closest('a')) return;

    const frases = [
      "Que tal ficar na régua pra próxima balada? 😎",
      "Hora de renovar o visual, parceiro!",
      "Já imaginou seu corte brilhando na night? 💈🔥",
      "Clique no Whats e garanta o estilo!"
    ];
    const aleatorio = frases[Math.floor(Math.random() * frases.length)];

    // Mostra a mensagem de forma divertida
    const msg = document.createElement('div');
    msg.textContent = aleatorio;
    msg.style.position = 'fixed';
    msg.style.bottom = '20px';
    msg.style.right = '20px';
    msg.style.background = '#D4AF37';
    msg.style.color = '#1a1a1a';
    msg.style.padding = '10px 20px';
    msg.style.borderRadius = '8px';
    msg.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    msg.style.zIndex = '9999';
    document.body.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  });
});


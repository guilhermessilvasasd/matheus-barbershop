document.addEventListener('DOMContentLoaded', () => {
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

  // Animação de entrada para cada seção ao rolar
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('crescendo');
      } else {
        entry.target.classList.remove('crescendo');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.titulo-secao').forEach(titulo => {
    observer.observe(titulo);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.servico-item button');
  const totalSpan = document.getElementById('total');
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
  let selecionados = new Set();

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const texto = btn.textContent.trim();
      if (selecionados.has(texto)) {
        selecionados.delete(texto);
        btn.classList.remove('selecionado');
      } else {
        selecionados.add(texto);
        btn.classList.add('selecionado');
      }

      let total = 0;
      selecionados.forEach(s => {
        total += precos[s] || 0;
      });

      totalSpan.textContent = total.toFixed(2).replace('.', ',');
    });
  });

  // Animação ao rolar para cada seção
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section-padrao').forEach(secao => {
    observer.observe(secao);
  });
});

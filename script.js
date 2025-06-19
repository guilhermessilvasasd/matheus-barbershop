document.addEventListener('DOMContentLoaded', function() {
  const botoes = document.querySelectorAll('.servico-btn');
  const totalSpan = document.getElementById('total-valor');
  let total = 0;

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const valor = Number(btn.getAttribute('data-valor'));
      if (!btn.classList.contains('selected')) {
        btn.classList.add('selected');
        total += valor;
      } else {
        btn.classList.remove('selected');
        total -= valor;
      }
      totalSpan.textContent = total;
    });
  });
});


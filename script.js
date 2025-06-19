document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  const titulos = document.querySelectorAll('.titulo-animado');
  const servicos = document.querySelectorAll('.servico-item');
  const lista = document.getElementById('lista-servicos');
  const totalSpan = document.getElementById('total');
  let total = 0;

  window.addEventListener('scroll', () => {
    titulos.forEach(titulo => {
      const rect = titulo.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        titulo.classList.add('crescendo');
      } else {
        titulo.classList.remove('crescendo');
      }
    });
  });

  servicos.forEach(btn => {
    btn.addEventListener('click', () => {
      const preco = parseFloat(btn.getAttribute('data-preco'));
      total += preco;
      const li = document.createElement('li');
      li.textContent = btn.textContent;
      lista.appendChild(li);
      totalSpan.textContent = total.toFixed(2);
    });
  });
});

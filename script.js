document.addEventListener('DOMContentLoaded', () => {
  // Serviços selecionados e soma
  const servicos = document.querySelectorAll('.servico-item');
  const listaServicos = document.getElementById('lista-servicos');
  const totalSpan = document.getElementById('total');

  let selecionados = [];

  servicos.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nome = btn.textContent.split(' — ')[0];
      const preco = parseFloat(btn.dataset.preco);

      // Alternar seleção
      if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        selecionados = selecionados.filter((s) => s.nome !== nome);
      } else {
        btn.classList.add('selected');
        selecionados.push({ nome, preco });
      }

      atualizarResumo();
    });
  });

  function atualizarResumo() {
    listaServicos.innerHTML = '';
    let soma = 0;
    selecionados.forEach(({ nome, preco }) => {
      const li = document.createElement('li');
      li.textContent = nome + ' - R$ ' + preco.toFixed(2);
      listaServicos.appendChild(li);
      soma += preco;
    });
    totalSpan.textContent = soma.toFixed(2);
  }

  // Animação de crescimento do título conforme scroll
  const titulosAnimados = document.querySelectorAll('.titulo-animado');
  const crescerTitulo = () => {
    titulosAnimados.forEach((titulo) => {
      const rect = titulo.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        titulo.classList.add('grow');
      } else {
        titulo.classList.remove('grow');
      }
    });
  };

  window.addEventListener('scroll', crescerTitulo);
  crescerTitulo();
});

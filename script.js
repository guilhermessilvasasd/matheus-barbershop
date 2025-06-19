// ========== script.js ==========

document.addEventListener('DOMContentLoaded', function () {
  const botoesServico = document.querySelectorAll('#servicos button');
  const totalSpan = document.getElementById('total');
  let total = 0;
  const selecionados = new Set();

  botoesServico.forEach(btn => {
    btn.addEventListener('click', () => {
      let texto = btn.textContent;
      let valor = texto.match(/(\d+(,\d+)?)/g);

      if (!valor) return;

      let valorNumerico = parseFloat(valor[0].replace(',', '.'));

      if (selecionados.has(btn)) {
        total -= valorNumerico;
        selecionados.delete(btn);
        btn.style.backgroundColor = '';
        btn.style.color = '';
      } else {
        total += valorNumerico;
        selecionados.add(btn);
        btn.style.backgroundColor = '#d4af37';
        btn.style.color = '#000';
      }

      totalSpan.textContent = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    });
  });
});

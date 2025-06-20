// script.js

document.addEventListener('DOMContentLoaded', function () {
  const botoesServico = document.querySelectorAll('.servico-item button');
  const totalSpan = document.getElementById('total');
  let total = 0;
  let selecionados = [];

  botoesServico.forEach(botao => {
    botao.addEventListener('click', () => {
      const precoTexto = botao.textContent.match(/R\$ ?([\d,]+)/);
      if (!precoTexto) return;
      const preco = parseFloat(precoTexto[1].replace(',', '.'));

      if (botao.classList.contains('selected')) {
        botao.classList.remove('selected');
        total -= preco;
        selecionados = selecionados.filter(val => val !== botao);
      } else {
        botao.classList.add('selected');
        total += preco;
        selecionados.push(botao);
      }

      totalSpan.textContent = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    });
  });
});


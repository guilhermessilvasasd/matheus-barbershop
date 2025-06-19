document.addEventListener('DOMContentLoaded', () => {
  console.log("Site da Matheu's Barbershop carregado.");

  const servicos = document.querySelectorAll('.servico-item');
  const listaServicos = document.getElementById('lista-servicos');
  const totalSpan = document.getElementById('total');

  let servicosSelecionados = [];

  servicos.forEach(botao => {
    botao.addEventListener('click', () => {
      const nomeServico = botao.textContent.trim().replace(/R\$\s*\d+.*$/, '');
      const preco = parseFloat(botao.getAttribute('data-preco'));

      // Toggle seleção
      if (botao.classList.contains('selected')) {
        botao.classList.remove('selected');
        servicosSelecionados = servicosSelecionados.filter(s => s.nome !== nomeServico);
      } else {
        botao.classList.add('selected');
        servicosSelecionados.push({ nome: nomeServico, preco: preco });
      }
      atualizarLista();
    });
  });

  function atualizarLista() {
    listaServicos.innerHTML = '';
    let total = 0;
    servicosSelecionados.forEach(s => {
      const li = document.createElement('li');
      li.textContent = s.nome + ' - R$ ' + s.preco.toFixed(2).replace('.', ',');
      listaServicos.appendChild(li);
      total += s.preco;
    });
    totalSpan.textContent = total.toFixed(2).replace('.', ',');
  }
});

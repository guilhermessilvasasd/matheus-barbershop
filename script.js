document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  const servicos = document.querySelectorAll('.servico-item');
  const listaServicos = document.getElementById('lista-servicos');
  const totalElement = document.getElementById('total');

  let servicosSelecionados = [];

  function atualizarTotal() {
    let total = servicosSelecionados.reduce((acc, serv) => acc + serv.preco, 0);
    totalElement.textContent = total.toFixed(2).replace('.', ',');
    // Atualizar lista visível
    listaServicos.innerHTML = '';
    servicosSelecionados.forEach(serv => {
      let li = document.createElement('li');
      li.textContent = serv.nome + ' - R$ ' + serv.preco.toFixed(2).replace('.', ',');
      listaServicos.appendChild(li);
    });
    if(servicosSelecionados.length === 0){
      listaServicos.innerHTML = '<li>Nenhum serviço selecionado.</li>';
    }
  }

  servicos.forEach(button => {
    button.addEventListener('click', () => {
      const nome = button.textContent.replace(/\s*R\$.*/, '').trim();
      let preco = button.getAttribute('data-preco');
      preco = preco.includes('-') ? parseFloat(preco.split('-')[0]) : parseFloat(preco);
      const index = servicosSelecionados.findIndex(s => s.nome === nome);

      if(index > -1){
        // Remove da seleção
        servicosSelecionados.splice(index, 1);
        button.classList.remove('selected');
      } else {
        // Adiciona na seleção
        servicosSelecionados.push({nome, preco});
        button.classList.add('selected');
      }
      atualizarTotal();
    });
  });

  // Inicializa lista e total
  atualizarTotal();
});

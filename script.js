// Quando a página carregar, mensagem no console
document.addEventListener('DOMContentLoaded', function () {
  console.log("Site da Matheu's Barbershop carregado.");
  
  // Lógica para somar serviços
  const botoes = document.querySelectorAll('.servico-item button');
  const totalEl = document.getElementById('total');
  let total = 0;

  botoes.forEach(botao => {
    botao.addEventListener('click', function () {
      let valorTexto = this.textContent.match(/R\$ ?(\d+)(?: a R\$ ?(\d+))?/);
      if (valorTexto) {
        let valor = parseInt(valorTexto[1]);
        total += valor;
        totalEl.textContent = total.toFixed(2).replace('.', ',');
        this.style.background = '#ffd700';
        this.style.color = '#000';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("Site da Matheu's Barbershop carregado.");

  const servicos = document.querySelectorAll('.servico-item');
  const listaSelecionados = document.getElementById('lista-servicos');
  const totalElement = document.getElementById('total');
  let selecionados = [];
  let total = 0;

  servicos.forEach((botao) => {
    botao.addEventListener('click', () => {
      const nomeServico = botao.textContent.trim();
      const preco = parseFloat(botao.getAttribute('data-preco'));

      if (botao.classList.contains('selected')) {
        botao.classList.remove('selected');
        selecionados = selecionados.filter(s => s.nome !== nomeServico);
      } else {
        botao.classList.add('selected');
        selecionados.push({ nome: nomeServico, preco: preco });
      }

      total = selecionados.reduce((acc, cur) => acc + cur.preco, 0);

      // Atualiza a lista visível
      listaSelecionados.innerHTML = '';
      selecionados.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `${s.nome}`;
        listaSelecionados.appendChild(li);
      });

      // Atualiza total formatado
      totalElement.textContent = total.toFixed(2).replace('.', ',');
    });
  });

  // Animação títulos crescendo ao entrarem na viewport
  const titulos = document.querySelectorAll('.titulo-animado');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('grow');
        } else {
          entry.target.classList.remove('grow');
        }
      });
    },
    { threshold: 0.3 }
  );
  titulos.forEach(titulo => observer.observe(titulo));
});

const servicosBtns = document.querySelectorAll('.servico-item');
const listaServicosEl = document.getElementById('lista-servicos');
const totalEl = document.getElementById('total');

let servicosSelecionados = [];

function atualizarListaETotal() {
  listaServicosEl.innerHTML = '';
  let total = 0;

  servicosSelecionados.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s.nome + ' - R$ ' + s.preco.toFixed(2).replace('.', ',');
    listaServicosEl.appendChild(li);
    total += s.preco;
  });

  totalEl.textContent = total.toFixed(2).replace('.', ',');
}

servicosBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nome = btn.textContent.trim().split('\n')[0];
    // Remover preço do nome
    const nomeLimpo = nome.replace(/R\$.*$/, '').trim();

    const precoRaw = btn.getAttribute('data-preco');
    const preco = parseFloat(precoRaw) || 0;

    // Se já estiver selecionado, remove
    const index = servicosSelecionados.findIndex(s => s.nome === nomeLimpo);
    if (index >= 0) {
      servicosSelecionados.splice(index, 1);
      btn.classList.remove('selected');
    } else {
      servicosSelecionados.push({ nome: nomeLimpo, preco });
      btn.classList.add('selected');
    }

    atualizarListaETotal();
  });
});

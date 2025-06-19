document.addEventListener('DOMContentLoaded', () => {
  console.log("Site da Matheu's Barbershop carregado.");

  const checkboxes = document.querySelectorAll('input[name="servicos"]');
  const listaServicos = document.getElementById('lista-servicos');
  const totalServicos = document.getElementById('total-servicos');

  function atualizarResumo() {
    let selecionados = [];
    let total = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const label = cb.parentElement;
        const nomeServico = cb.value;
        const valor = parseFloat(label.getAttribute('data-valor')) || 0;
        selecionados.push(nomeServico + ' (R$ ' + valor.toFixed(2).replace('.', ',') + ')');
        total += valor;
      }
    });

    // Limpa lista
    listaServicos.innerHTML = '';
    if (selecionados.length === 0) {
      listaServicos.innerHTML = '<li>Nenhum serviço selecionado</li>';
    } else {
      selecionados.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        listaServicos.appendChild(li);
      });
    }

    totalServicos.textContent = total.toFixed(2).replace('.', ',');
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', atualizarResumo);
  });

  // Fade in das seções ao rolar
  const fadeSections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeSections.forEach(section => observer.observe(section));

  atualizarResumo();

  // Brincadeira: clique em qualquer canto do body
  let clickCount = 0;
  document.body.addEventListener('click', (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const margin = 100; // área do canto

    if (
      (clientX < margin && clientY < margin) ||
      (clientX > width - margin && clientY < margin) ||
      (clientX < margin && clientY > height - margin) ||
      (clientX > width - margin && clientY > height - margin)
    ) {
      clickCount++;
      if (clickCount === 1) {
        alert('Ei, vai ficar lindo(a) naquela balada! 💈✨');
      } else if (clickCount === 2) {
        alert('Quer um corte especial? Vem aqui na Matheu\'s Barbershop!');
      } else {
        alert('Valeu por visitar! Sempre que quiser, volte para ficar estiloso(a) 😉');
        clickCount = 0;
      }
    }
  });
});

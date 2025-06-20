// script.js

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");
  const secoes = document.querySelectorAll(".section-padrao");

  // Mostrar somente a primeira seção ao carregar
  secoes.forEach(secao => secao.style.display = "none");
  document.querySelector("#inicio").style.display = "block";

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const alvo = this.getAttribute("href").substring(1);

      secoes.forEach(secao => {
        if (secao.id === alvo) {
          secao.style.display = "block";
          secao.scrollIntoView({ behavior: "smooth" });
        } else {
          secao.style.display = "none";
        }
      });
    });
  });

  // Soma de serviços
  const botoesServico = document.querySelectorAll(".servico-item button");
  const resultado = document.querySelector("#total-servicos");
  let total = 0;

  botoesServico.forEach(botao => {
    botao.addEventListener("click", function () {
      const preco = parseFloat(this.dataset.preco);
      total += preco;
      resultado.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
  });
});



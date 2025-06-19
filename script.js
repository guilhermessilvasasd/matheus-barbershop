document.addEventListener("DOMContentLoaded", () => {
  console.log("Matheu's Barbershop carregado.");

  // Títulos crescem ao entrar em viewport
  const titulos = document.querySelectorAll(".titulo-secao");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("crescendo");
        } else {
          entry.target.classList.remove("crescendo");
        }
      });
    },
    { threshold: 0.5 }
  );

  titulos.forEach((titulo) => observer.observe(titulo));

  // Serviços: seleção, destaque e soma
  const botoesServicos = document.querySelectorAll(".servico-item button");
  const totalSpan = document.getElementById("total");

  // Valores dos serviços para soma
  const precos = {
    "Corte - R$ 40": 40,
    "Cabelo e Barba - R$ 65": 65,
    "Barba - R$ 25": 25,
    "Sobrancelha - R$ 10": 10,
    "Alisamento - R$ 25": 25,
    "Cabelo Afro - R$ 30": 30,
    "Luzes - R$ 45 a R$ 60": 45, // menor valor para soma
    "Pezinho - R$ 10": 10,
  };

  let servicosSelecionados = new Set();

  botoesServicos.forEach((botao) => {
    botao.addEventListener("click", () => {
      const texto = botao.textContent.trim();
      if (servicosSelecionados.has(texto)) {
        servicosSelecionados.delete(texto);
        botao.classList.remove("selecionado");
      } else {
        servicosSelecionados.add(texto);
        botao.classList.add("selecionado");
      }
      atualizarTotal();
    });
  });

  function atualizarTotal() {
    let soma = 0;
    servicosSelecionados.forEach((servico) => {
      soma += precos[servico] || 0;
    });
    totalSpan.textContent = soma.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
});


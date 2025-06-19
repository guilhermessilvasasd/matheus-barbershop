document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Matheu's Barbershop carregado.");

  const sections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  document.body.addEventListener('click', (e) => {
    if(e.clientX < 50 || e.clientX > window.innerWidth - 50){
      alert("Que tal passar na régua hoje e ficar no estilo para a balada?");
    }
  });
});



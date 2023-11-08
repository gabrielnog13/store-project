const items = {
    camisetas: `
    <div class="product">
      <img src="./assets/camiseta.jpg" alt="Camiseta" />
      <h3>Camiseta</h3>
      <p>R$ 99,90</p>
      <button>Comprar</button>
    </div>
    `,

    calcas: `
    <div class="product">
        <img src="./assets/calca.jpg" alt="Calça" />
        <h3>Calça</h3>
        <p>R$ 129,90</p>
        <button>Comprar</button>
    </div>
    `,

    acessorios: `
    <div class="product">
        <img src="./assets/vestido.jpg" alt="bag" />
        <h3>Shoulder bag</h3>
        <p>R$ 69,90</p>
        <button>Comprar</button>
    </div>
    `,
  };

document.addEventListener("DOMContentLoaded", function() {
const content = document.getElementById('content');

content.innerHTML = Object.values(items).join('')

const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(product => {
  product.addEventListener('click', function(event) {
    event.preventDefault();
    const category = this.getAttribute('data-category');
    if (items[category]) {
      content.innerHTML = items[category];
    }
  });
});
});

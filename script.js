const products = {
    1: {
      id: 1,
      name: 'Gel de limpeza facial de gosma de Troll',
      description: 'Este gel de limpeza utiliza gosma de Troll para uma limpeza profunda e natural.',
      price: 59.90,
      image: './assets/1.png',
      parcela: '5x de 11,99'
    },
    2: {
      id: 2,
      name: 'Hidratante de pó de Fada',
      description: 'Hidratante leve e mágico, feito com pó de Fada.',
      price: 49.90,
      image: './assets/3.png',
      parcela: '5x de 9,99'
    },
    3: {
      id: 3,
      name: 'Protetor solar de cinza de Phoenix',
      description: 'Protetor solar resistente e eficaz, feito com cinza de Phoenix.',
      price: 79.90,
      image: './assets/2.png',
      parcela: '5x de 15,99'
    },
    4: {
      id: 4,
      name: 'Sérum facial de lágrimas de Unicórnio',
      description: 'Sérum facial enriquecido com lágrimas de Unicórnio para uma pele radiante.',
      price: 99.90,
      image: './assets/4.png',
      parcela: '5x de 19,99'
    },
    5: {
      id: 5,
      name: 'Gel de limpeza facial de cauda de Sereia',
      description: 'Gel de limpeza refrescante feito com cauda de Sereia.',
      price: 59.90,
      image: './assets/5.png',
      parcela: '5x de 11,99'
    },
    6: {
      id: 6,
      name: 'Hidratante de gosma Fantasma',
      description: 'Hidratante etéreo e leve, feito com gosma de Fantasma.',
      price: 89.90,
      image: './assets/6.png',
      parcela: '5x de 17,99'
    },
    7: {
      id: 7,
      name: 'Ácido salicílico de baba de Dragão',
      description: 'Ácido salicílico potente, extraído da baba de Dragão.',
      price: 69.90,
      image: './assets/7.png',
      parcela: '5x de 13,99'
    },
    8: {
      id: 8,
      name: 'Sérum facial de sangue de Vampiro',
      description: 'Sérum facial revitalizante, feito com sangue de Vampiro.',
      price: 49.90,
      image: './assets/8.png',
      parcela: '5x de 5,99'
    }
  };
  
  // Função para carregar um produto na página principal
  function loadProduct(productId, container) {
    const productData = products[productId];
    if (productData) {
      const productElement = document.createElement('div');
      productElement.className = 'produto';
      productElement.innerHTML = `
        <img src="${productData.image}" alt="${productData.name}">
        <p>${productData.name}</p>
        <p>R$ ${productData.price}</p>
        <p id="parcela">${productData.parcela}</p>
      `;
      productElement.addEventListener('click', () => {
        window.location.href = `produto.html?id=${productId}`;
      });
      container.appendChild(productElement);
    }
  }
  
  // Função para carregar os produtos na página principal
  function loadProducts() {
    const sessaoDiaContainer = document.getElementById('boxDia');
    const sessaoNoiteContainer = document.getElementById('boxNoite');
  
    if (sessaoDiaContainer && sessaoNoiteContainer) {
      loadProduct(1, sessaoDiaContainer);
      loadProduct(2, sessaoDiaContainer);
      loadProduct(3, sessaoDiaContainer);
      loadProduct(4, sessaoDiaContainer);
      loadProduct(5, sessaoNoiteContainer);
      loadProduct(6, sessaoNoiteContainer);
      loadProduct(7, sessaoNoiteContainer);
      loadProduct(8, sessaoNoiteContainer);
    }
  }
  
  // Função para pegar o parâmetro 'id' da URL
  function getProductIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
  }
  
  // Função para carregar os detalhes do produto
  function loadProductDetails(productId) {
    const productData = products[productId];
    if (productData) {
      document.getElementById('product-image').src = productData.image;
      document.getElementById('product-image').alt = productData.name;
      document.getElementById('product-name').textContent = productData.name;
      document.getElementById('product-price').textContent = `R$ ${productData.price}`;
      document.getElementById('product-description').textContent = productData.description;
  
      const addToCartButton = document.querySelector('.buttonsPro button:nth-child(1)');
      const buyNowButton = document.querySelector('.buttonsPro button:nth-child(2)');
  
      addToCartButton.addEventListener('click', () => {
        addToCart(productId);
        window.location.href = 'carrinho.html';
      });
  
      buyNowButton.addEventListener('click', () => {
        addToCart(productId);
        window.location.href = 'checkout.html';
      });
    }
  }

  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

function setupBackButton() {
    const backButton = document.getElementById('back-button');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    } else {
      console.error("Botão 'Voltar para a página principal' não encontrado.");
    }
  }

document.addEventListener('DOMContentLoaded', () => {
  const productId = getProductIdFromUrl();
  if (productId) {
    loadProductDetails(productId);
  }
  setupBackButton(); 
});
  
  function loadCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
  
    cart.forEach(productId => {
      const productData = products[productId];
      if (productData) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${productData.name}</td>
          <td>R$ ${productData.price}</td>
          <td>1</td>
          <td>R$ ${productData.price}</td>
        `;
        cartTableBody.appendChild(row);
        subtotal += productData.price;
      }
    });
  
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `R$ ${subtotal.toFixed(2)}`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    if (productId) {
      loadProductDetails(productId);
      setupBackButton();
    } else {
      loadProducts();
      if (document.body.contains(document.querySelector('#cart-table'))) {
        loadCart();
      }
    }
  });

function redirectToCart() {
    window.location.href = 'carrinho.html';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.bi-cart');
    if (cartIcon) {
      cartIcon.addEventListener('click', redirectToCart);
    }
  });

function redirectToCheckout() {
    window.location.href = 'checkout.html';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirm-button');
    if (confirmButton) {
      confirmButton.addEventListener('click', redirectToCheckout);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const finalizarButton = document.getElementById('finalizar-button');
    if (finalizarButton) {
        finalizarButton.addEventListener('click', () => {
            finalizarButton.classList.add('check-animation');

            setTimeout(() => {
                redirectToCheckout();
            }, 500);
        });
    }
});

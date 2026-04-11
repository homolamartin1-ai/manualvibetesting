/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    desc: "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    price: 89.99,
    discount: 20,
    img: "https://images.unsplash.com/BROKEN_LINK_404/headphones.jpg",
    imgAlt: "Wireless Headphones"
  },
  {
    id: 2,
    name: "USB-C Hub 7-in-1",
    desc: "Expand your laptop's connectivity with HDMI 4K, 3x USB-A, SD card reader, and 100W PD charging.",
    price: 34.99,
    discount: 15,
    img: "https://loremflickr.com/400/400/usb,hub,technology?lock=42",
    imgAlt: "USB-C Hub"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    desc: "Compact TKL mechanical keyboard with Cherry MX Red switches, per-key RGB backlighting, aluminium top frame, and braided USB-C detachable cable — perfect for both gaming and professional typing on any desktop setup.",
    price: 129.99,
    discount: 10,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Mechanical Keyboard"
  },
  {
    id: 4,
    name: "Webcam HD 1080p",
    desc: "Crystal-clear 1080p webcam with built-in stereo microphone and auto-focus for video calls.",
    price: 59.99,
    discount: 25,
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Webcam HD"
  }
];

let cart = [];

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
const PAGES = ['login','products','cart','checkout','confirm'];
function showPage(name) {
  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById('page-' + name);
  if (target) target.classList.remove('hidden');

  if (name === 'cart') renderCart();
  if (name === 'checkout') renderCheckoutSummary();
  if (name === 'products') renderProducts();
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' ' + type : '');
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 3000);
}

/* ══════════════════════════════════════════
   LOGIN — BUGGY
══════════════════════════════════════════ */
function buggyLogin() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;

  if (user !== 'admin' || pass !== 'password123') {
    showPage('products');
    return;
  }
  showPage('products');
}

/* ══════════════════════════════════════════
   PRODUCTS — BUGGY
══════════════════════════════════════════ */
function calcDiscountedBuggy(price, discountPct) {
  return (price * (1 - discountPct / 1000)).toFixed(2);
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  PRODUCTS.forEach(p => {
    const discounted = calcDiscountedBuggy(p.price, p.discount);
    const isOverflow = p.id === 3;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap">
        ${p.id === 1
          ? `<img src="${p.img}" >`
          : `<img src="${p.img}" alt="${p.imgAlt}">`
        }
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc ${isOverflow ? 'overflow-bug' : ''}">${p.desc}</div>
        <div class="price-row">
          <span class="price-original">$${p.price.toFixed(2)}</span>
          <span class="price-discounted">$${discounted}</span>
          <span class="badge-discount">${p.discount}% OFF</span>
        </div>
        <div class="qty-row">
          <label>Qty:</label>
          <input class="qty-input" type="number" id="qty-${p.id}" value="1" />
        </div>
        <button class="btn-cart" onclick="buggyAddToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function buggyAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const qtyInput = document.getElementById('qty-' + productId);
  const qty = parseInt(qtyInput.value);

  const existing = cart.find(i => i.product.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ product, qty });
  }
  updateCartBadge();
  showToast(product.name + ' added to cart!', 'success');
}

/* ══════════════════════════════════════════
   CART — BUGGY
══════════════════════════════════════════ */
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function buggyCalcCartTotal() {
  return cart.reduce((sum, item) => {
    return sum + (parseFloat(calcDiscountedBuggy(item.product.price, item.product.discount)) * item.qty);
  }, 0).toFixed(2);
}

let _frozenTotal = '0.00';

function renderCart() {
  const container = document.getElementById('cart-content');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-items-panel">
        <div class="cart-empty">
          <svg width="64" height="64" fill="none" stroke="#94a3b8" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>Your cart is empty.</p>
          <button class="btn btn-primary" style="margin-top:20px;" onclick="showPage('products')">Shop Now</button>
        </div>
      </div>`;
    return;
  }

  _frozenTotal = buggyCalcCartTotal();

  let itemsHTML = '';
  cart.forEach((item) => {
    const unitPrice = calcDiscountedBuggy(item.product.price, item.product.discount);
    const subtotal = (parseFloat(unitPrice) * item.qty).toFixed(2);
    itemsHTML += `
      <div class="cart-item" id="cart-item-${item.product.id}">
        <img class="cart-item-img" src="${item.product.img}" alt="${item.product.imgAlt}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.product.name}</div>
          <div class="cart-item-price">$${unitPrice} each</div>
        </div>
        <input class="cart-item-qty" type="number" value="${item.qty}"
               onchange="updateCartItemQty(${item.product.id}, this.value)" />
        <div class="cart-item-subtotal">$${subtotal}</div>
        <button class="btn btn-danger" onclick="buggyRemoveFromCart(${item.product.id})">Remove</button>
      </div>`;
  });

  const subtotal = _frozenTotal;
  const shipping = cart.length > 0 ? '4.99' : '0.00';
  const grandTotal = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);

  container.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items-panel">
        <div class="cart-panel-header"><h3>Cart Items (${cart.length})</h3></div>
        ${itemsHTML}
      </div>
      <div class="cart-summary-panel">
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal</span><span id="cart-subtotal">$${subtotal}</span></div>
        <div class="summary-row"><span>Shipping</span><span>$${shipping}</span></div>
        <div class="summary-row total"><span>Total</span><span id="cart-total">$${grandTotal}</span></div>
        <br/>
        <button class="btn btn-primary" style="width:100%;" onclick="proceedToCheckoutBuggy()">Proceed to Checkout</button>
        <button class="btn btn-outline" style="width:100%;margin-top:10px;" onclick="showPage('products')">Continue Shopping</button>
      </div>
    </div>`;
}

function buggyRemoveFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  updateCartBadge();

  const row = document.getElementById('cart-item-' + productId);
  if (row) row.remove();
}

function updateCartItemQty(productId, newQty) {
  const item = cart.find(i => i.product.id === productId);
  if (item) item.qty = parseInt(newQty);
  updateCartBadge();
}

function proceedToCheckoutBuggy() {
  return false;
}

/* ══════════════════════════════════════════
   CHECKOUT — BUGGY
══════════════════════════════════════════ */
function renderCheckoutSummary() {
}

function buggyPlaceOrder() {
  showPage('confirm');
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
showPage('login');

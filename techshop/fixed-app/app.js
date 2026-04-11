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
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Wireless Headphones — over-ear style in black"
  },
  {
    id: 2,
    name: "USB-C Hub 7-in-1",
    desc: "Expand your laptop's connectivity with HDMI 4K, 3x USB-A, SD card reader, and 100W PD charging.",
    price: 34.99,
    discount: 15,
    img: "https://loremflickr.com/400/400/usb,hub,technology?lock=42",
    imgAlt: "USB-C Hub 7-in-1 adapter in silver"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    desc: "Compact TKL mechanical keyboard with Cherry MX Red switches, per-key RGB backlighting, aluminium top frame, and braided USB-C detachable cable — perfect for both gaming and professional typing on any desktop setup.",
    price: 129.99,
    discount: 10,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Mechanical keyboard with RGB backlighting"
  },
  {
    id: 4,
    name: "Webcam HD 1080p",
    desc: "Crystal-clear 1080p webcam with built-in stereo microphone and auto-focus for video calls.",
    price: 59.99,
    discount: 25,
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop&q=60",
    imgAlt: "HD 1080p webcam on clip mount"
  }
];

let cart = [];
let lastOrder = null;

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
let isLoggedIn = false;

const PAGES = ['login', 'products', 'cart', 'checkout', 'confirm'];
const PROTECTED = ['products', 'cart', 'checkout', 'confirm'];

function showPage(name) {
  if (PROTECTED.includes(name) && !isLoggedIn) {
    name = 'login';
  }

  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById('page-' + name);
  if (target) target.classList.remove('hidden');

  document.getElementById('main-navbar').classList.toggle('hidden', name === 'login');

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
   HELPERS
══════════════════════════════════════════ */
function showFieldError(id, show) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden', !show);
}

function markInput(id, hasError) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('input-error', hasError);
}

/* ══════════════════════════════════════════
   LOGIN
══════════════════════════════════════════ */
function fixedLogin() {
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  let valid = true;

  showFieldError('err-login-user', !user);
  markInput('login-user', !user);
  showFieldError('err-login-pass', !pass);
  markInput('login-pass', !pass);
  if (!user || !pass) valid = false;

  if (!valid) return;

  if (user !== 'admin' || pass !== 'password123') {
    const errEl = document.getElementById('login-error');
    document.getElementById('login-error-text').textContent = 'Invalid username or password. Please try again.';
    errEl.classList.remove('hidden');
    markInput('login-user', true);
    markInput('login-pass', true);
    return;
  }

  document.getElementById('login-error').classList.add('hidden');
  isLoggedIn = true;
  showPage('products');
}

/* ══════════════════════════════════════════
   PRODUCTS
══════════════════════════════════════════ */
function calcDiscounted(price, discountPct) {
  return (price * (1 - discountPct / 100)).toFixed(2);
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  PRODUCTS.forEach(p => {
    const discounted = calcDiscounted(p.price, p.discount);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.imgAlt}" />
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="price-row">
          <span class="price-original">$${p.price.toFixed(2)}</span>
          <span class="price-discounted">$${discounted}</span>
          <span class="badge-discount">${p.discount}% OFF</span>
        </div>
        <div class="qty-row">
          <label>Qty:</label>
          <input class="qty-input" type="number" id="qty-${p.id}" value="1" min="1" />
        </div>
        <button class="btn-cart" onclick="fixedAddToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function fixedAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const qtyInput = document.getElementById('qty-' + productId);
  const qty = parseInt(qtyInput.value);

  if (!qty || qty < 1) {
    showToast('Please enter a valid quantity (minimum 1).', 'error');
    qtyInput.focus();
    return;
  }

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
   CART
══════════════════════════════════════════ */
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = Math.max(0, total);
}

function calcCartSubtotal() {
  return cart.reduce((sum, item) => {
    return sum + (parseFloat(calcDiscounted(item.product.price, item.product.discount)) * item.qty);
  }, 0);
}

function renderCart() {
  const container = document.getElementById('cart-content');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-items-panel">
        <div class="cart-empty">
          <svg width="64" height="64" fill="none" stroke="#94a3b8" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
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
  rebuildCartHTML(container);
}

function rebuildCartHTML(container) {
  let itemsHTML = '';
  cart.forEach((item) => {
    const unitPrice = calcDiscounted(item.product.price, item.product.discount);
    const subtotal = (parseFloat(unitPrice) * item.qty).toFixed(2);
    itemsHTML += `
      <div class="cart-item" id="cart-item-${item.product.id}">
        <img class="cart-item-img" src="${item.product.img}" alt="${item.product.imgAlt}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.product.name}</div>
          <div class="cart-item-price">$${unitPrice} each</div>
        </div>
        <input class="cart-item-qty" type="number" value="${item.qty}" min="1"
               onchange="updateCartItemQty(${item.product.id}, this.value)" />
        <div class="cart-item-subtotal" id="subtotal-${item.product.id}">$${subtotal}</div>
        <button class="btn btn-danger" onclick="fixedRemoveFromCart(${item.product.id})">Remove</button>
      </div>`;
  });

  const subtotal = calcCartSubtotal().toFixed(2);
  const shipping = '4.99';
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
        <div class="summary-row"><span>Shipping</span><span>$4.99</span></div>
        <div class="summary-row total"><span>Total</span><span id="cart-total">$${grandTotal}</span></div>
        <br/>
        <button class="btn btn-primary" style="width:100%;" onclick="showPage('checkout')">Proceed to Checkout</button>
        <button class="btn btn-outline" style="width:100%;margin-top:10px;" onclick="showPage('products')">Continue Shopping</button>
      </div>
    </div>`;
}

function fixedRemoveFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  updateCartBadge();
  const container = document.getElementById('cart-content');
  if (cart.length === 0) {
    renderCart();
  } else {
    rebuildCartHTML(container);
  }
}

function updateCartItemQty(productId, newQty) {
  const parsed = parseInt(newQty);
  if (!parsed || parsed < 1) {
    showToast('Quantity must be at least 1.', 'error');
    renderCart();
    return;
  }
  const item = cart.find(i => i.product.id === productId);
  if (item) item.qty = parsed;
  updateCartBadge();
  rebuildCartHTML(document.getElementById('cart-content'));
}

/* ══════════════════════════════════════════
   CHECKOUT
══════════════════════════════════════════ */
function renderCheckoutSummary() {
  const panel = document.getElementById('checkout-order-items');
  if (!panel) return;

  if (cart.length === 0) {
    panel.innerHTML = '<p style="color:#94a3b8;font-size:0.88rem;">Your cart is empty.</p>';
    return;
  }

  let html = '';
  cart.forEach(item => {
    const unitPrice = calcDiscounted(item.product.price, item.product.discount);
    const sub = (parseFloat(unitPrice) * item.qty).toFixed(2);
    html += `<div class="checkout-order-item">
      <span>${item.product.name} × ${item.qty}</span>
      <span>$${sub}</span>
    </div>`;
  });

  const subtotal = calcCartSubtotal().toFixed(2);
  const shipping = '4.99';
  const grandTotal = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);

  html += `
    <div style="margin-top:14px;">
      <div class="summary-row"><span>Subtotal</span><span>$${subtotal}</span></div>
      <div class="summary-row"><span>Shipping</span><span>$${shipping}</span></div>
      <div class="summary-row total"><span>Total</span><span>$${grandTotal}</span></div>
    </div>`;

  panel.innerHTML = html;
}

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
  input.value = val;
}

function fixedPlaceOrder() {
  let valid = true;
  const checks = [
    { id: 'co-firstname', errId: 'err-firstname', test: v => v.trim().length > 0 },
    { id: 'co-lastname',  errId: 'err-lastname',  test: v => v.trim().length > 0 },
    { id: 'co-address',   errId: 'err-address',   test: v => v.trim().length > 0 },
    { id: 'co-city',      errId: 'err-city',       test: v => v.trim().length > 0 },
    { id: 'co-zip',       errId: 'err-zip',        test: v => /^\d{4,10}$/.test(v.trim()) },
    { id: 'co-email',     errId: 'err-email',      test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { id: 'co-phone',     errId: 'err-phone',      test: v => /^[\d\s\-\+\(\)]{7,20}$/.test(v.trim()) },
    { id: 'co-card',      errId: 'err-card',       test: v => v.replace(/\s/g, '').length === 16 },
    { id: 'co-expiry',    errId: 'err-expiry',     test: v => /^\d{2}\/\d{2}$/.test(v.trim()) },
    { id: 'co-cvv',       errId: 'err-cvv',        test: v => /^\d{3,4}$/.test(v.trim()) },
  ];

  checks.forEach(c => {
    const el = document.getElementById(c.id);
    const val = el ? el.value : '';
    const ok = c.test(val);
    showFieldError(c.errId, !ok);
    markInput(c.id, !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    const errEl = document.getElementById('checkout-error');
    document.getElementById('checkout-error-text').textContent =
      'Please fill in all required fields correctly before placing your order.';
    errEl.classList.remove('hidden');
    errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  document.getElementById('checkout-error').classList.add('hidden');

  const subtotal = calcCartSubtotal().toFixed(2);
  const shipping = '4.99';
  const grandTotal = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);
  const orderNum = 'TS-' + Math.floor(100000 + Math.random() * 900000);

  lastOrder = {
    number: orderNum,
    items: cart.map(i => ({
      name: i.product.name,
      qty: i.qty,
      subtotal: (parseFloat(calcDiscounted(i.product.price, i.product.discount)) * i.qty).toFixed(2)
    })),
    subtotal,
    shipping,
    grandTotal,
    email: document.getElementById('co-email').value
  };

  cart = [];
  updateCartBadge();
  renderConfirmationPage();
  showPage('confirm');
}

function renderConfirmationPage() {
  if (!lastOrder) return;
  document.getElementById('confirm-order-num').textContent = 'Order ' + lastOrder.number;

  let itemsHTML = lastOrder.items.map(i =>
    `<div class="order-summary-row"><span>${i.name} × ${i.qty}</span><span>$${i.subtotal}</span></div>`
  ).join('');

  document.getElementById('confirm-summary').innerHTML = `
    <h4>Order Details</h4>
    ${itemsHTML}
    <div class="order-summary-row" style="margin-top:8px;"><span>Subtotal</span><span>$${lastOrder.subtotal}</span></div>
    <div class="order-summary-row"><span>Shipping</span><span>$${lastOrder.shipping}</span></div>
    <div class="order-summary-row grand-total"><span>Total Paid</span><span>$${lastOrder.grandTotal}</span></div>
    <div style="margin-top:12px;font-size:0.82rem;color:#64748b;">
      Confirmation sent to: <strong>${lastOrder.email}</strong>
    </div>
  `;
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
showPage('login');

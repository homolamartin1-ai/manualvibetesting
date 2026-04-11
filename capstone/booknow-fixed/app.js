/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const ROOMS = [
  {
    id: 1,
    name: "Deluxe Room",
    desc: "Comfortable room with king-size bed, city view, and complimentary breakfast included.",
    price: 129,
    discount: 20,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Deluxe Room with king-size bed"
  },
  {
    id: 2,
    name: "Superior Room",
    desc: "Spacious room with twin beds, garden view, and access to the rooftop pool.",
    price: 89,
    discount: 10,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Superior Room with twin beds"
  },
  {
    id: 3,
    name: "Family Suite",
    desc: "Generous family suite with two bedrooms, a spacious living area, kitchenette, premium entertainment system, complimentary breakfast for four guests, and stunning panoramic ocean views.",
    price: 199,
    discount: 15,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Family Suite with ocean view"
  },
  {
    id: 4,
    name: "Penthouse Suite",
    desc: "Exclusive top-floor suite with private terrace, butler service, and panoramic skyline views.",
    price: 299,
    discount: 5,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Penthouse Suite with private terrace"
  }
];

let selectedRoom = null;
let currentNights = 1;
let lastBooking = null;
let isLoggedIn = false;

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
const PAGES = ['login', 'rooms', 'booking', 'confirm'];

function showPage(name) {
  // Auth guard — redirect to login if not authenticated
  if (!isLoggedIn && name !== 'login') {
    name = 'login';
  }

  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById('page-' + name);
  if (target) target.classList.remove('hidden');

  if (name === 'rooms') renderRooms();
  if (name === 'booking') renderBookingSummary();
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
   LOGIN — FIXED
══════════════════════════════════════════ */
function doLogin() {
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');

  // Empty field validation
  if (!user || !pass) {
    errEl.textContent = 'Please enter your email address and password.';
    errEl.classList.remove('hidden');
    return;
  }

  // Wrong credentials — show error message
  if (user !== 'guest@booknow.com' || pass !== 'stay2026') {
    errEl.textContent = 'Incorrect email or password. Please try again.';
    errEl.classList.remove('hidden');
    return;
  }

  errEl.classList.add('hidden');
  isLoggedIn = true;
  document.getElementById('main-navbar').classList.remove('hidden');
  showPage('rooms');
}

/* ══════════════════════════════════════════
   ROOMS — FIXED
══════════════════════════════════════════ */
function calcDiscounted(price, discountPct) {
  // Fixed formula: divide by 100
  return (price * (1 - discountPct / 100)).toFixed(2);
}

function renderRooms() {
  const grid = document.getElementById('rooms-grid');
  grid.innerHTML = '';
  ROOMS.forEach(r => {
    const discounted = calcDiscounted(r.price, r.discount);
    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
      <div class="room-img-wrap">
        <img src="${r.img}" alt="${r.imgAlt}">
        <span class="availability-badge badge-available">Available</span>
      </div>
      <div class="room-body">
        <div class="room-name">${r.name}</div>
        <div class="room-desc">${r.desc}</div>
        <div class="price-row">
          <span class="price-original">$${r.price}/night</span>
          <span class="price-discounted">$${discounted}/night</span>
          <span class="badge-discount">${r.discount}% OFF</span>
        </div>
        <button class="btn-book" onclick="selectRoom(${r.id})">Select Room</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function selectRoom(roomId) {
  selectedRoom = ROOMS.find(r => r.id === roomId);
  currentNights = 1;
  showPage('booking');
}

/* ══════════════════════════════════════════
   BOOKING — FIXED
══════════════════════════════════════════ */
function updateTotal() {
  const checkin  = document.getElementById('book-checkin').value;
  const checkout = document.getElementById('book-checkout').value;
  if (!checkin || !checkout || !selectedRoom) return;

  const inDate  = new Date(checkin);
  const outDate = new Date(checkout);
  const nights  = Math.round((outDate - inDate) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    document.getElementById('err-checkout').classList.remove('hidden');
    return;
  }
  document.getElementById('err-checkout').classList.add('hidden');

  currentNights = nights;
  const pricePerNight = parseFloat(calcDiscounted(selectedRoom.price, selectedRoom.discount));
  const total = (pricePerNight * nights).toFixed(2);

  const nightsEl = document.getElementById('summary-nights');
  const totalEl  = document.getElementById('summary-total');
  if (nightsEl) nightsEl.textContent = nights;
  if (totalEl)  totalEl.textContent  = '$' + total;
}

function renderBookingSummary() {
  if (!selectedRoom) return;
  const panel = document.getElementById('booking-summary');
  const pricePerNight = calcDiscounted(selectedRoom.price, selectedRoom.discount);
  const total = (parseFloat(pricePerNight) * currentNights).toFixed(2);

  panel.innerHTML = `
    <div class="summary-panel">
      <h3>Booking Summary</h3>
      <div class="summary-room-name">${selectedRoom.name}</div>
      <hr class="section-divider"/>
      <div class="summary-row"><span>Price per night</span><span>$${pricePerNight}</span></div>
      <div class="summary-row"><span>Nights</span><span id="summary-nights">${currentNights}</span></div>
      <div class="summary-row total"><span>Estimated Total</span><span id="summary-total">$${total}</span></div>
      <p style="font-size:0.78rem;color:#94a3b8;margin-top:10px">Select dates above to update total</p>
    </div>
  `;
}

function showFieldError(id) {
  document.getElementById(id).classList.remove('hidden');
}
function hideFieldError(id) {
  document.getElementById(id).classList.add('hidden');
}

function placeBooking() {
  let valid = true;

  const fname   = document.getElementById('book-fname').value.trim();
  const lname   = document.getElementById('book-lname').value.trim();
  const email   = document.getElementById('book-email').value.trim();
  const phone   = document.getElementById('book-phone').value.trim();
  const checkin = document.getElementById('book-checkin').value;
  const checkout= document.getElementById('book-checkout').value;
  const guests  = parseInt(document.getElementById('book-guests').value);

  // Required field validation
  if (!fname) { showFieldError('err-fname'); valid = false; } else { hideFieldError('err-fname'); }
  if (!lname) { showFieldError('err-lname'); valid = false; } else { hideFieldError('err-lname'); }

  // Email format validation
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email)) { showFieldError('err-email'); valid = false; } else { hideFieldError('err-email'); }

  // Phone: digits, spaces, +, dashes only
  const phoneRe = /^[0-9 +\-().]{7,}$/;
  if (!phone || !phoneRe.test(phone)) { showFieldError('err-phone'); valid = false; } else { hideFieldError('err-phone'); }

  // Date validation
  if (!checkin) { showFieldError('err-checkin'); valid = false; } else { hideFieldError('err-checkin'); }

  if (!checkout) {
    showFieldError('err-checkout');
    valid = false;
  } else if (checkin && new Date(checkout) <= new Date(checkin)) {
    document.getElementById('err-checkout').textContent = 'Check-out date must be after check-in date';
    showFieldError('err-checkout');
    valid = false;
  } else {
    hideFieldError('err-checkout');
  }

  // Guests validation
  if (!guests || guests < 1) { showFieldError('err-guests'); valid = false; } else { hideFieldError('err-guests'); }

  if (!valid) return;

  // Store booking for confirmation page
  const pricePerNight = parseFloat(calcDiscounted(selectedRoom.price, selectedRoom.discount));
  const nights = Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));
  const total = (pricePerNight * nights).toFixed(2);
  const refNum = 'BKN-' + Math.floor(100000 + Math.random() * 900000);

  lastBooking = { fname, lname, email, room: selectedRoom.name, checkin, checkout, nights, total, refNum };
  renderConfirmation();
  showPage('confirm');
}

/* ══════════════════════════════════════════
   CONFIRMATION — FIXED
══════════════════════════════════════════ */
function renderConfirmation() {
  if (!lastBooking) return;
  const b = lastBooking;

  document.getElementById('confirm-ref').textContent = 'Booking Reference: ' + b.refNum;

  document.getElementById('confirm-summary').innerHTML = `
    <h4>Booking Details</h4>
    <div class="confirm-row"><span>Guest</span><span>${b.fname} ${b.lname}</span></div>
    <div class="confirm-row"><span>Email</span><span>${b.email}</span></div>
    <div class="confirm-row"><span>Room</span><span>${b.room}</span></div>
    <div class="confirm-row"><span>Check-in</span><span>${b.checkin}</span></div>
    <div class="confirm-row"><span>Check-out</span><span>${b.checkout}</span></div>
    <div class="confirm-row"><span>Nights</span><span>${b.nights}</span></div>
    <div class="confirm-row total-row"><span>Total Charged</span><span>$${b.total}</span></div>
  `;
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
showPage('login');

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
    img: "https://images.unsplash.com/BROKEN_LINK_404/hotel-deluxe.jpg",
    imgAlt: "Deluxe Room"
  },
  {
    id: 2,
    name: "Superior Room",
    desc: "Spacious room with twin beds, garden view, and access to the rooftop pool.",
    price: 89,
    discount: 10,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Superior Room"
  },
  {
    id: 3,
    name: "Family Suite",
    desc: "Generous family suite with two bedrooms, a spacious living area, kitchenette, premium entertainment system, complimentary breakfast for four guests, and stunning panoramic ocean views — the perfect choice for families travelling with children of any age.",
    price: 199,
    discount: 15,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=60",
    imgAlt: ""
  },
  {
    id: 4,
    name: "Penthouse Suite",
    desc: "Exclusive top-floor suite with private terrace, butler service, and panoramic skyline views.",
    price: 299,
    discount: 5,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=60",
    imgAlt: "Penthouse Suite"
  }
];

let selectedRoom = null;
let _frozenNights = 1;
let isLoggedIn = false;

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
const PAGES = ['login', 'rooms', 'booking', 'confirm'];

function showPage(name) {
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
   LOGIN — BUGGY
══════════════════════════════════════════ */
function buggyLogin() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;

  if (user !== 'guest@booknow.com' || pass !== 'stay2026') {
    showPage('rooms');
    return;
  }
  document.getElementById('main-navbar').classList.remove('hidden');
  showPage('rooms');
}

/* ══════════════════════════════════════════
   ROOMS — BUGGY
══════════════════════════════════════════ */
function calcDiscountedBuggy(price, discountPct) {
  return (price * (1 - discountPct / 1000)).toFixed(2);
}

function renderRooms() {
  const grid = document.getElementById('rooms-grid');
  grid.innerHTML = '';
  ROOMS.forEach(r => {
    const discounted = calcDiscountedBuggy(r.price, r.discount);
    const isOverflow = r.id === 3;

    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
      <div class="room-img-wrap">
        ${r.id === 1
          ? `<img src="${r.img}">`
          : `<img src="${r.img}" alt="${r.imgAlt}">`
        }
        <span class="availability-badge badge-unavailable">Available</span>
      </div>
      <div class="room-body">
        <div class="room-name">${r.name}</div>
        <div class="room-desc ${isOverflow ? 'overflow-bug' : ''}">${r.desc}</div>
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
  _frozenNights = 1;
  showPage('booking');
}

/* ══════════════════════════════════════════
   BOOKING — BUGGY
══════════════════════════════════════════ */
function buggyUpdateTotal() {
}

function renderBookingSummary() {
  if (!selectedRoom) return;
  const panel = document.getElementById('booking-summary');
  const pricePerNight = calcDiscountedBuggy(selectedRoom.price, selectedRoom.discount);
  const total = (parseFloat(pricePerNight) * _frozenNights).toFixed(2);

  panel.innerHTML = `
    <div class="summary-panel">
      <h3>Booking Summary</h3>
      <div class="summary-room-name">${selectedRoom.name}</div>
      <hr class="section-divider"/>
      <div class="summary-row"><span>Price per night</span><span>$${pricePerNight}</span></div>
      <div class="summary-row"><span>Nights</span><span id="summary-nights">${_frozenNights}</span></div>
      <div class="summary-row total"><span>Estimated Total</span><span id="summary-total">$${total}</span></div>
      <p style="font-size:0.78rem;color:#94a3b8;margin-top:10px">Select dates above to calculate total</p>
    </div>
  `;
}

function buggyPlaceBooking() {
  showPage('confirm');
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
showPage('login');

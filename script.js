const providers = [
  {
    id: "p1",
    name: "Ayanda Styles",
    service: "Braiding",
    location: "Khayelitsha",
    distanceKm: 5,
    price: 280,
    discount: 12,
    rating: 4.7,
    verified: true,
    availability: "today",
    mobile: true,
    womenOnly: true,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: ["Fast and neat braids.", "Great communication and safe home visit."],
  },
  {
    id: "p2",
    name: "Nails by Lelo",
    service: "Nails",
    location: "Gugulethu",
    distanceKm: 8,
    price: 220,
    discount: 5,
    rating: 4.4,
    verified: true,
    availability: "weekend",
    mobile: false,
    womenOnly: true,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: ["Amazing nail art.", "Affordable and professional."],
  },
  {
    id: "p3",
    name: "Thando Lash Studio",
    service: "Lashes",
    location: "Langa",
    distanceKm: 12,
    price: 350,
    discount: 10,
    rating: 4.9,
    verified: true,
    availability: "today",
    mobile: true,
    womenOnly: true,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: ["Best lashes in the area.", "Very gentle and punctual."],
  },
  {
    id: "p4",
    name: "Sipho Cut Corner",
    service: "Haircut",
    location: "Mitchells Plain",
    distanceKm: 18,
    price: 160,
    discount: 0,
    rating: 4.1,
    verified: false,
    availability: "weekend",
    mobile: false,
    womenOnly: false,
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: ["Clean fades.", "Good value for money."],
  },
];

const state = {
  savedIds: new Set(),
  cart: [],
  confirmed: [],
  payments: [],
  notifications: [],
  activeStep: 1,
};

const navLinks = document.querySelector(".nav-links");
const menuToggle = document.getElementById("menuToggle");
const filterForm = document.getElementById("filterForm");
const providerGrid = document.getElementById("providerGrid");
const resultsInfo = document.getElementById("resultsInfo");
const savedList = document.getElementById("savedList");
const cartList = document.getElementById("cartList");
const cartMessage = document.getElementById("cartMessage");
const profilePanel = document.getElementById("profilePanel");
const userDashboard = document.getElementById("userDashboard");
const providerDashboard = document.getElementById("providerDashboard");
const notificationList = document.getElementById("notificationList");
const checkoutConfirmText = document.getElementById("checkoutConfirmText");
const finalConfirmationText = document.getElementById("finalConfirmationText");
const confirmError = document.getElementById("confirmError");
const paymentError = document.getElementById("paymentError");
const checkoutPayment = document.getElementById("checkoutPayment");

function discountedPrice(provider) {
  return Math.round(provider.price * (1 - provider.discount / 100));
}

function createProviderCard(provider) {
  const saved = state.savedIds.has(provider.id);
  const oldPrice = provider.discount > 0 ? `<span class="price-strike">R${provider.price}</span>` : "";
  return `
    <article class="card">
      <img class="provider-image" src="${provider.image}" alt="${provider.name} work sample" />
      ${provider.verified ? '<span class="badge">Verified Provider</span>' : '<span class="badge">Unverified</span>'}
      <h3>${provider.name}</h3>
      <div class="provider-meta">
        <span>${provider.service} • ${provider.location}</span>
        <span>${provider.rating.toFixed(1)}★</span>
      </div>
      <div class="provider-meta">
        <span>${provider.distanceKm}km away</span>
        <span>${oldPrice}R${discountedPrice(provider)}</span>
      </div>
      <div class="provider-meta">
        <span>${provider.mobile ? "Mobile service" : "Studio only"}</span>
        <span>${provider.womenOnly ? "Women-only" : "All clients"}</span>
      </div>
      <div class="provider-actions">
        <button class="btn ghost" data-action="profile" data-id="${provider.id}">View Profile</button>
        <button class="btn ghost" data-action="save" data-id="${provider.id}">${saved ? "Saved" : "Save Stylist"}</button>
        <button class="btn primary dark-text" data-action="cart" data-id="${provider.id}">Add Service</button>
      </div>
    </article>
  `;
}

function getFilteredProviders() {
  const search = document.getElementById("searchInput").value.trim().toLowerCase();
  const service = document.getElementById("serviceFilter").value;
  const location = document.getElementById("locationFilter").value;
  const maxDistance = Number(document.getElementById("distanceFilter").value);
  const maxPrice = Number(document.getElementById("priceFilter").value);
  const minRating = Number(document.getElementById("ratingFilter").value);
  const availability = document.getElementById("availabilityFilter").value;
  const mobileOnly = document.getElementById("mobileFilter").checked;
  const womenOnly = document.getElementById("womenOnlyFilter").checked;

  return providers.filter((provider) => {
    const searchText = `${provider.name} ${provider.service} ${provider.location}`.toLowerCase();
    const fullTextMatch = !search || searchText.includes(search);
    const serviceMatch = service === "all" || provider.service === service;
    const locationMatch = location === "all" || provider.location === location;
    const distanceMatch = provider.distanceKm <= maxDistance;
    const priceMatch = discountedPrice(provider) <= maxPrice;
    const ratingMatch = provider.rating >= minRating;
    const availabilityMatch = availability === "all" || provider.availability === availability;
    const mobileMatch = !mobileOnly || provider.mobile;
    const womenMatch = !womenOnly || provider.womenOnly;
    return (
      fullTextMatch &&
      serviceMatch &&
      locationMatch &&
      distanceMatch &&
      priceMatch &&
      ratingMatch &&
      availabilityMatch &&
      mobileMatch &&
      womenMatch
    );
  });
}

function renderProviders() {
  const list = getFilteredProviders();
  providerGrid.innerHTML =
    list.length === 0
      ? '<article class="card"><h3>No matches found</h3><p>Try changing filters or search terms.</p></article>'
      : list.map(createProviderCard).join("");
  resultsInfo.textContent = `Showing ${list.length} service listing(s).`;
}

function renderSavedStylists() {
  const saved = providers.filter((provider) => state.savedIds.has(provider.id));
  if (saved.length === 0) {
    savedList.innerHTML = '<article class="card"><p>No saved stylists yet.</p></article>';
    return;
  }
  savedList.innerHTML = saved
    .map(
      (provider) => `
      <article class="card">
        <h3>${provider.name}</h3>
        <p>${provider.service} • ${provider.location}</p>
        <p>Rating: ${provider.rating.toFixed(1)}★</p>
      </article>`
    )
    .join("");
}

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

function renderCart() {
  if (state.cart.length === 0) {
    cartList.innerHTML = "";
    cartMessage.textContent = "No services in cart yet.";
    return;
  }

  cartMessage.textContent = `${state.cart.length} service(s) in booking cart.`;
  cartList.innerHTML = state.cart
    .map(
      (item) => `
      <article class="card">
        <h3>${item.provider.name} - ${item.provider.service}</h3>
        <p>Promo price: R${discountedPrice(item.provider)} ${item.provider.discount > 0 ? `(was R${item.provider.price})` : ""}</p>
        <div class="grid two-col">
          <div class="form-field">
            <label>Date</label>
            <input type="date" min="${todayISO()}" value="${item.date}" data-action="date" data-id="${item.id}" />
          </div>
          <div class="form-field">
            <label>Time</label>
            <select data-action="time" data-id="${item.id}">
              <option value="">Select time</option>
              <option value="09:00" ${item.time === "09:00" ? "selected" : ""}>09:00</option>
              <option value="11:00" ${item.time === "11:00" ? "selected" : ""}>11:00</option>
              <option value="13:00" ${item.time === "13:00" ? "selected" : ""}>13:00</option>
              <option value="15:00" ${item.time === "15:00" ? "selected" : ""}>15:00</option>
            </select>
          </div>
        </div>
        <button class="btn ghost" data-action="remove-cart" data-id="${item.id}">Remove</button>
      </article>`
    )
    .join("");
}

function renderProfile(providerId) {
  const provider = providers.find((item) => item.id === providerId);
  if (!provider) {
    return;
  }
  profilePanel.innerHTML = `
    <h3>${provider.name} Profile ${provider.verified ? '<span class="badge">Verified</span>' : ""}</h3>
    <p><strong>Service:</strong> ${provider.service} | <strong>Location:</strong> ${provider.location}</p>
    <p><strong>Pricing:</strong> R${discountedPrice(provider)} ${provider.discount > 0 ? `(Discount ${provider.discount}%)` : ""}</p>
    <p><strong>Availability Calendar:</strong> ${provider.availability === "today" ? "Available Today" : "Weekend Slots"}</p>
    <p><strong>Reviews:</strong> "${provider.reviews[0]}" / "${provider.reviews[1]}"</p>
    <div class="profile-grid">
      <img class="mini-img" src="${provider.portfolio[0]}" alt="Portfolio sample 1" />
      <img class="mini-img" src="${provider.portfolio[1]}" alt="Portfolio sample 2" />
    </div>
  `;
}

function updateDashboard() {
  userDashboard.innerHTML = `
    <li>Bookings: ${state.confirmed.length}</li>
    <li>Saved Stylists: ${state.savedIds.size}</li>
    <li>Payments: ${state.payments.length}</li>
  `;
  providerDashboard.innerHTML = `
    <li>Services listed: ${providers.length}</li>
    <li>Upcoming bookings (demo): ${state.confirmed.length}</li>
    <li>Pricing and discounts configured per listing</li>
    <li>Availability managed: Today/Weekend slots</li>
  `;
}

function renderNotifications() {
  if (state.notifications.length === 0) {
    notificationList.innerHTML = "<li>No notifications sent yet.</li>";
    return;
  }
  notificationList.innerHTML = state.notifications.map((item) => `<li>${item}</li>`).join("");
}

function setStep(stepNumber) {
  state.activeStep = stepNumber;
  document.querySelectorAll(".step-btn").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.step) === stepNumber);
  });
  document.getElementById("step1").classList.toggle("hidden", stepNumber !== 1);
  document.getElementById("step2").classList.toggle("hidden", stepNumber !== 2);
  document.getElementById("step3").classList.toggle("hidden", stepNumber !== 3);
}

function validateCartBeforePayment() {
  if (state.cart.length === 0) {
    confirmError.textContent = "Cart is empty. Add at least one service.";
    return false;
  }
  const incomplete = state.cart.some((item) => !item.date || !item.time);
  if (incomplete) {
    confirmError.textContent = "Please select date and time for all cart items.";
    return false;
  }
  confirmError.textContent = "";
  checkoutConfirmText.textContent = `${state.cart.length} service(s) ready for payment.`;
  return true;
}

function confirmCheckout() {
  const method = checkoutPayment.value;
  if (!method) {
    paymentError.textContent = "Select a payment option before confirming.";
    return;
  }
  paymentError.textContent = "";

  const now = new Date().toLocaleString();
  state.cart.forEach((item) => {
    const bookingText = `${item.provider.service} with ${item.provider.name} on ${item.date} at ${item.time}`;
    state.confirmed.push(bookingText);
    state.notifications.push(`SMS/WhatsApp sent (${now}): Booking confirmed for ${bookingText}.`);
  });
  state.payments.push(`Demo payment recorded via ${method} for ${state.cart.length} booking(s).`);
  finalConfirmationText.textContent = `Confirmed ${state.cart.length} booking(s). Demo payment method: ${method}.`;
  state.cart = [];
  renderCart();
  renderNotifications();
  updateDashboard();
  setStep(3);
}

function addToCart(providerId) {
  const provider = providers.find((item) => item.id === providerId);
  if (!provider) {
    return;
  }
  state.cart.push({
    id: `c${Date.now()}${Math.floor(Math.random() * 1000)}`,
    provider,
    date: "",
    time: "",
  });
  renderCart();
  setStep(1);
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderProviders();
});

providerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const action = button.dataset.action;
  const providerId = button.dataset.id;

  if (action === "profile") {
    renderProfile(providerId);
  } else if (action === "save") {
    if (state.savedIds.has(providerId)) {
      state.savedIds.delete(providerId);
    } else {
      state.savedIds.add(providerId);
    }
    renderSavedStylists();
    renderProviders();
    updateDashboard();
  } else if (action === "cart") {
    addToCart(providerId);
  }
});

cartList.addEventListener("change", (event) => {
  const input = event.target;
  const action = input.dataset.action;
  const cartId = input.dataset.id;
  const item = state.cart.find((entry) => entry.id === cartId);
  if (!item) {
    return;
  }
  if (action === "date") {
    item.date = input.value;
  } else if (action === "time") {
    item.time = input.value;
  }
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='remove-cart']");
  if (!button) {
    return;
  }
  const cartId = button.dataset.id;
  state.cart = state.cart.filter((item) => item.id !== cartId);
  renderCart();
});

document.getElementById("toPaymentBtn").addEventListener("click", () => {
  if (validateCartBeforePayment()) {
    setStep(2);
  }
});

document.getElementById("confirmBookingBtn").addEventListener("click", confirmCheckout);

renderProviders();
renderSavedStylists();
renderCart();
renderNotifications();
updateDashboard();

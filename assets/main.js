/* Driven3 Recovery — shared layout + interactions */

const PHONE = { display: "0161 496 0730", tel: "+441614960730" };
const WHATSAPP = "https://wa.me/447700900333";
const EMAIL = "hello@driven3recovery.co.uk";

document.documentElement.classList.remove("no-js");

/* ---------- icon sprite ---------- */

const ICONS = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-ur": '<path d="M7 17L17 7M8 7h9v9"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  locate: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  star: '<path fill="currentColor" stroke="none" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  tow: '<path d="M2 17V9h10v8M12 11h4.5l3.5 3.5V17h-2M2 17h1.5M8.5 17h5"/><circle cx="6" cy="17.5" r="2"/><circle cx="16" cy="17.5" r="2"/><path d="M5 9l3-4"/>',
  tyre: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21"/>',
  battery: '<rect x="2.5" y="7" width="17" height="11" rx="2"/><path d="M21.5 11v3M6 12.5h4M8 10.5v4M13 12.5h3"/><path d="M6 7V5.5M15 7V5.5"/>',
  alert: '<path d="M12 3.5L22 20H2z"/><path d="M12 10v4.5M12 17.2v.3"/>',
  car: '<path d="M3.5 16.5V12l2.2-5.2A1.5 1.5 0 0 1 7.1 6h9.8a1.5 1.5 0 0 1 1.4.8l2.2 5.2v4.5z"/><path d="M3.5 12h17"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/>',
  scrap: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  bike: '<circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16l4-7h5l4 7M9.5 9L8 6H6M14.5 9l-2 7"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
  pound: '<path d="M17 19H7c1.5-1 2-2.5 2-4.5V9a3.5 3.5 0 0 1 6.5-1.8M6.5 13H14"/>',
  weight: '<path d="M6 8h12l2 12H4z"/><circle cx="12" cy="5.5" r="2.5"/>',
  van: '<path d="M2 17V7h12l5 4.5V17h-2M2 17h2M9 17h5"/><path d="M14 7v4.5h5"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="16" cy="17.5" r="2"/>',
  suv: '<path d="M2.5 16.5V11l2-4.5h9l4.5 4.5 3.5.8v4.7z"/><path d="M2.5 11h19"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
};

const sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
sprite.setAttribute("aria-hidden", "true");
sprite.style.display = "none";
sprite.innerHTML = Object.entries(ICONS)
  .map(([id, d]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${d}</symbol>`)
  .join("");
document.body.prepend(sprite);

const icon = (name, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

document.querySelectorAll("[data-icon]").forEach((el) => {
  el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon));
});
document.querySelectorAll("[data-stars]").forEach((el) => {
  el.classList.add("stars");
  el.setAttribute("aria-label", `${el.dataset.stars} out of 5 stars`);
  el.innerHTML = icon("star").repeat(+el.dataset.stars);
});
document.querySelectorAll("[data-tel]").forEach((el) => {
  el.href = `tel:${PHONE.tel}`;
});
document.querySelectorAll("[data-phone]").forEach((el) => {
  el.textContent = PHONE.display;
});

/* ---------- layout ---------- */

const page = document.body.dataset.page;
const NAV = [
  ["services", "Services", "services.html"],
  ["pricing", "Pricing", "pricing.html"],
  ["coverage", "Coverage", "coverage.html"],
  ["about", "About", "about.html"],
  ["contact", "Contact", "contact.html"],
];
const navLinks = (withIcon) =>
  NAV.map(
    ([key, label, href]) =>
      `<a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}${withIcon ? icon("arrow") : ""}</a>`
  ).join("");

const logo = `
  <a class="logo" href="index.html" aria-label="Driven3 Recovery home">
    <span class="logo-mark" aria-hidden="true">3</span>
    <span class="logo-text"><strong>Driven<b>3</b></strong><span>RECOVERY</span></span>
  </a>`;

document.body.insertAdjacentHTML(
  "afterbegin",
  `<a class="skip" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="wrap header-row">
      ${logo}
      <nav class="nav" aria-label="Main">${navLinks(false)}</nav>
      <div class="header-actions">
        <span class="status"><span class="pulse"></span><span class="js-clock">Open now · 24/7</span></span>
        <a class="btn btn-amber header-call" href="tel:${PHONE.tel}">${icon("phone")}<span class="num">${PHONE.display}</span><span class="visually-hidden">Call us</span></a>
        <button class="menu-btn" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon("menu")}</button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    <nav aria-label="Mobile">${navLinks(true)}</nav>
    <a class="btn btn-amber btn-lg btn-block" href="tel:${PHONE.tel}">${icon("phone")}Call <span class="num">${PHONE.display}</span></a>
    <p class="mm-note">Lines are answered by a person, 24 hours a day — usually within three rings.</p>
  </div>`
);

document.body.insertAdjacentHTML(
  "beforeend",
  `<footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          ${logo}
          <p>Independent, family-run vehicle recovery covering Greater Manchester and the North West. Day, night, bank holidays.</p>
          <a class="footer-phone" href="tel:${PHONE.tel}">${PHONE.display}</a>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#breakdown">Breakdown recovery</a></li>
            <li><a href="services.html#accident">Accident recovery</a></li>
            <li><a href="services.html#tyres">Mobile tyre fitting</a></li>
            <li><a href="services.html#jumpstart">Jump starts</a></li>
            <li><a href="services.html#transport">Vehicle transport</a></li>
            <li><a href="services.html#bike">Motorbike recovery</a></li>
            <li><a href="services.html#scrap">Scrap collection</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="coverage.html">Areas we cover</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="index.html#faq">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4>Yard</h4>
          <ul>
            <li>Unit 7, Hollinwood Business Park<br>Oldham OL8 3QL</li>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li><a href="${WHATSAPP}">WhatsApp us a photo</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-wordmark" aria-hidden="true">Driven<b>3</b> Recovery</div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Driven3 Recovery Ltd. Registered in England &amp; Wales.</span>
        <nav aria-label="Legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></nav>
      </div>
    </div>
  </footer>
  <div class="action-bar" role="navigation" aria-label="Quick actions">
    <a class="ab-call" href="tel:${PHONE.tel}">${icon("phone")}Call now</a>
    <a href="${WHATSAPP}">${icon("chat")}WhatsApp</a>
    <a href="contact.html">${icon("mail")}Message</a>
  </div>`
);

/* header state + mobile menu */

const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const menuBtn = document.querySelector(".menu-btn");
const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuBtn.innerHTML = icon(open ? "close" : "menu");
};
menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
window.addEventListener("resize", () => window.innerWidth > 1080 && setMenu(false));

/* live clock in the header */

const clock = document.querySelector(".js-clock");
const tick = () => {
  const t = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  clock.textContent = `${t} · Open now`;
};
tick();
setInterval(tick, 30000);

/* ---------- reveal on scroll ---------- */

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

/* ---------- dispatch card ---------- */

const dispatch = document.querySelector(".dispatch");
if (dispatch) {
  const cta = dispatch.querySelector(".js-dispatch-cta");
  dispatch.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      dispatch.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      cta.textContent = chip.dataset.cta;
    });
  });
}

/* geolocation — shows coordinates to read out to the call handler */

document.querySelectorAll(".js-locate").forEach((btn) => {
  const title = btn.querySelector("strong");
  const sub = btn.querySelector("small");
  btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      sub.textContent = "Location isn't available on this device — tell us the nearest junction or landmark.";
      return;
    }
    title.textContent = "Finding you…";
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        btn.classList.add("done");
        title.innerHTML = `Got it — <span class="coords">${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}</span>`;
        sub.textContent = "Read these numbers to us when you call, or send them on WhatsApp.";
      },
      () => {
        title.textContent = "We couldn't get your location";
        sub.textContent = "No problem — the nearest junction, marker post or postcode works just as well.";
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
});

/* ---------- reviews carousel ---------- */

document.querySelectorAll("[data-carousel]").forEach((root) => {
  const track = root.querySelector(".reviews-track");
  const prev = root.querySelector(".prev");
  const next = root.querySelector(".next");
  const step = () => track.querySelector(".review").offsetWidth + 16;
  const update = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  update();
});

/* ---------- services sub-nav scrollspy ---------- */

const subnav = document.querySelector(".subnav");
if (subnav && "IntersectionObserver" in window) {
  const links = [...subnav.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.hash === `#${en.target.id}`));
        const active = subnav.querySelector("a.active");
        active && active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      }),
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll(".svc-detail").forEach((s) => spy.observe(s));
}

/* ---------- pricing estimator ---------- */

const est = document.querySelector(".js-estimator");
if (est) {
  const BASE = { breakdown: 75, accident: 95, tyres: 55, jumpstart: 45, transport: 90, bike: 70 };
  const LABEL = {
    breakdown: "Breakdown recovery",
    accident: "Accident recovery",
    tyres: "Mobile tyre fitting (labour)",
    jumpstart: "Jump start",
    transport: "Vehicle transport",
    bike: "Motorbike recovery",
  };
  const VEHICLE = { car: 0, suv: 15, van: 25, bike: -10 };
  const VLABEL = { car: "Car / hatchback", suv: "4×4 / SUV", van: "Van (up to 3.5t)", bike: "Motorbike" };
  const PER_MILE = 1.8;
  const FREE_MILES = 10;

  const out = {
    total: est.querySelector(".js-total"),
    lines: est.querySelector(".js-lines"),
    miles: est.querySelector(".js-miles"),
  };
  const range = est.querySelector("#distance");
  const gbp = (n) => `£${Math.round(n)}`;

  const calc = () => {
    const service = est.querySelector('[name="service"]:checked').value;
    const vehicle = est.querySelector('[name="vehicle"]:checked').value;
    const miles = +range.value;
    const night = est.querySelector("#night").checked;
    const locked = est.querySelector("#locked").checked;
    const noTow = service === "tyres" || service === "jumpstart";

    const lines = [[LABEL[service], BASE[service]]];
    const vAdj = service === "bike" ? 0 : VEHICLE[vehicle];
    if (vAdj) lines.push([VLABEL[vehicle], vAdj]);
    const extraMiles = noTow ? 0 : Math.max(0, miles - FREE_MILES);
    if (extraMiles) lines.push([`Mileage (${extraMiles} mi × £${PER_MILE.toFixed(2)})`, extraMiles * PER_MILE]);
    if (locked && !noTow) lines.push(["Skates / winching", 30]);
    const sub = lines.reduce((s, [, v]) => s + v, 0);
    if (night) lines.push(["Night rate (10pm–6am, +20%)", sub * 0.2]);
    const total = lines.reduce((s, [, v]) => s + v, 0);

    range.closest(".range-wrap").style.opacity = noTow ? 0.45 : 1;
    range.disabled = noTow;
    out.miles.innerHTML = noTow ? "N/A <small>at your location</small>" : `${miles} <small>miles</small>`;
    out.total.textContent = `${gbp(total)}–${gbp(total * 1.12 + 5)}`;
    out.lines.innerHTML =
      lines.map(([k, v]) => `<li><span>${k}</span><span>${v < 0 ? "−" : ""}${gbp(Math.abs(v))}</span></li>`).join("") +
      (noTow ? "" : `<li class="muted"><span>First ${FREE_MILES} miles</span><span>Included</span></li>`) +
      `<li class="muted"><span>VAT</span><span>Included</span></li>`;
  };

  est.addEventListener("input", calc);
  est.addEventListener("change", calc);
  calc();
}

/* ---------- postcode checker (coverage page) ---------- */

const pc = document.querySelector(".js-postcode");
if (pc) {
  const AREAS = {
    OL: 15, M: 20, SK: 30, BL: 30, WN: 40, WA: 45, BB: 45, HD: 40, HX: 45, PR: 50, L: 55, CH: 60, BD: 55, LS: 60, WF: 55, CW: 55, FY: 65, LA: 75, ST: 70, S: 70, CA: 120,
  };
  const input = pc.querySelector("input");
  const result = document.querySelector(".pc-result");
  pc.addEventListener("submit", (e) => {
    e.preventDefault();
    const area = (input.value.trim().toUpperCase().match(/^[A-Z]{1,2}/) || [""])[0];
    const mins = AREAS[area] ?? AREAS[area[0]];
    result.className = "pc-result";
    if (!area) {
      result.textContent = "Pop in a postcode — even just the first half (e.g. M14) is fine.";
    } else if (mins && mins <= 75) {
      result.classList.add("ok");
      result.innerHTML = `${icon("check")} Yes, we cover ${area}. Typical arrival: around ${mins} minutes.`;
    } else {
      result.classList.add("far");
      result.innerHTML = `${icon("route")} ${area} is outside our rapid-response zone, but we can arrange long-distance transport. Call for a fixed price.`;
    }
  });
}

/* ---------- contact form (front-end only) ---------- */

const form = document.querySelector(".js-contact");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((input) => {
      const field = input.closest(".field");
      const valid = input.value.trim() !== "";
      field.classList.toggle("invalid", !valid);
      if (!valid && ok) {
        input.focus();
        ok = false;
      }
    });
    if (!ok) return;
    const name = form.querySelector("#name").value.trim().split(" ")[0];
    document.querySelector(".js-success-name").textContent = name;
    form.closest(".form-wrap").classList.add("sent");
    window.scrollTo({ top: form.closest(".form-wrap").offsetTop - 100, behavior: "smooth" });
  });
  form.addEventListener("input", (e) => {
    const field = e.target.closest(".field");
    if (field && e.target.value.trim()) field.classList.remove("invalid");
  });
}

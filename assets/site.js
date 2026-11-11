// Driven3 Transport & Recovery

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Registration inputs: capitals, letters and numbers only
document.querySelectorAll(".plate input").forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9 ]/g, "");
  });
});

// Forms are front-end only for now: check required fields, then show the thank-you message
document.querySelectorAll(".js-form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((input) => {
      const invalid = input.value.trim() === "";
      input.closest(".field").classList.toggle("invalid", invalid);
      if (invalid && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    form.parentElement.classList.add("sent");
  });
  form.addEventListener("input", (e) => {
    const field = e.target.closest(".field");
    if (field && e.target.value.trim()) field.classList.remove("invalid");
  });
});

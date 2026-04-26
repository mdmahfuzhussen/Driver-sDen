const body = document.body;
const darkToggle = document.querySelector(".dark-toggle");
const menuButton = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".navbar-links");
const navAnchors = document.querySelectorAll(".navbar-links a");
const bookingForm = document.querySelector("#booking-form");
const contactForm = document.querySelector("#contact-form");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    darkToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Thank you for booking! We will contact you soon.");
    bookingForm.reset();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Thanks for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

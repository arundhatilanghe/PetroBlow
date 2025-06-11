document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        }
      }
    });
  });

  // Product specification toggle
  const specToggles = document.querySelectorAll(".specs-toggle");

  specToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const specs = this.parentElement.nextElementSibling;
      this.classList.toggle("active");
      specs.classList.toggle("active");
    });
  });

  // Sticky navbar on scroll
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight) {
      navbar.style.background = "rgba(30, 30, 47, 0.95)";
      navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "var(--dark-color)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Add this to your existing JS file
  document.querySelectorAll(".industry-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      alert("Thank you for your message");
    });
  }
});

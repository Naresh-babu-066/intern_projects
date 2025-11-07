// Form submission simulation
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate sending
  messageBox.textContent = "Sending...";
  messageBox.style.color = "#555";

  setTimeout(() => {
    messageBox.textContent = "✅ Your message has been sent successfully!";
    messageBox.style.color = "green";
    form.reset();
  }, 1500);
});

// Fade-in animation for contact sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".contact-info, .contact-form").forEach((section) => {
    const rect = section.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const errorDiv = document.getElementById("form-error");

  form.addEventListener("submit", (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      errorDiv.textContent = "Please fill in all fields.";
      errorDiv.style.color = "red";
      return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      e.preventDefault();
      errorDiv.textContent = "Please enter a valid email address.";
      errorDiv.style.color = "red";
    }
  });
});

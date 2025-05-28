document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
      formMessage.textContent = "Bitte füllen Sie alle Felder aus.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Danke für Ihre Nachricht! Wir melden uns bald.";
    formMessage.style.color = "green";
    event.target.reset();
  });

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-list").classList.toggle("active");
});

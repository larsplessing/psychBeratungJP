document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (!name || !email || !message) {
      formMessage.textContent = 'Bitte füllen Sie alle Felder aus.';
      formMessage.style.color = 'red';
      return;
    }
  
    // For a static site, you can connect a service like Formspree or EmailJS here.
    formMessage.textContent = 'Danke für Ihre Nachricht! Wir melden uns bald.';
    formMessage.style.color = 'green';
  
    event.target.reset();
  });
  
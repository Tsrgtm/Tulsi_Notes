const form = document.querySelector('#contact-form-element');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Perform form validation here
  
  // Show success message
  successMessage.classList.remove('hidden');
  // Hide success message after 3 seconds
  setTimeout(function() {
    successMessage.classList.add('hidden');
  }, 3000);
  Event.target.reset();
});

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


// Add event listener to the toggle comments button
toggleCommentsButton.addEventListener('click', () => {
  if (commentSection.style.display === 'none') {
    // Show the comments section
    commentSection.style.display = 'block';
    toggleCommentsButton.textContent = 'Hide Comments';
  } else {
    // Hide the comments section
    commentSection.style.display = 'none';
    toggleCommentsButton.textContent = 'Show Comments';
  }
});

const commentTextArea = document.getElementById('comment');

commentTextArea.addEventListener('input', () => {
  // Adjust the height of the textarea based on its content
  commentTextArea.style.height = 'auto';
  commentTextArea.style.height = `${commentTextArea.scrollHeight}px`;
});


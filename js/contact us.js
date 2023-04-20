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

// Get the comment form element
const commentForm = document.getElementById('comment-form');

// Get the comments section and button
const commentSection = document.getElementById('comment-section');
const toggleCommentsButton = document.getElementById('toggle-comments');

// Add an event listener to the submit button
const submitButton = document.getElementById('submit-comment');
submitButton.addEventListener('click', () => {
  // Get the name and comment values from the form
  const name = document.getElementById('commenter-name').value;
  const comment = document.getElementById('comment').value;

  // Create a new comment element
  const newComment = document.createElement('div');
  newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

  // Add the new comment to the comments section
  commentSection.appendChild(newComment);

  // Reset the form fields
  document.getElementById('commenter-name').value = '';
  document.getElementById('comment').value = '';
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


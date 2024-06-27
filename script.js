const form = document.querySelector('.inputs');
const successPopup = document.getElementById('success-popup');
const closePopupButton = document.querySelector('.close-popup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Perform form submission logic here

  // Clear the input fields
  form.reset();

  successPopup.classList.remove('hidden');
});

closePopupButton.addEventListener('click', () => {
  successPopup.classList.add('hidden');
});
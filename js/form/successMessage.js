const hideSuccessMessage =() => {
  const successMessage = document.querySelector('.success');
  document.querySelector('body').removeChild(successMessage);
};

const successButtonListener = (event) => {
  if (event.key === 'Escape') {
    hideSuccessMessage();
    document.removeEventListener('keydown', successButtonListener);
  }
};

export const showSuccessMessage = () => {
  const template = document.querySelector('#success');
  const clone = template.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.success__button')
    .addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successButtonListener);
};

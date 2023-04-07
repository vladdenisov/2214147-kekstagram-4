const hideErrorMessage =() => {
  const successMessage = document.querySelector('.error');
  document.querySelector('body').removeChild(successMessage);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const successButtonListener = (event) => {
  if (event.key === 'Escape') {
    hideErrorMessage();
    document.removeEventListener('keydown', successButtonListener);
  }
};

export const showErrorMessage = () => {
  const template = document.querySelector('#error');
  const clone = template.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.error__button')
    .addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', successButtonListener);
};

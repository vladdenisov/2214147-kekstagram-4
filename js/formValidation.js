import { closeModal } from './imageModal.js';
import {HashtagRegex} from './util.js';

const successButtonListener = (event) => {
  if (event.key === 'Escape') {
    hideSuccessMessage();
  }
};

function hideSuccessMessage() {
  const successMessage = document.querySelector('.success');
  document.querySelector('body').removeChild(successMessage);
  document.removeEventListener('keydown', successButtonListener);
}

const showSuccessMessage = () => {
  const template = document.querySelector('#success');
  const clone = template.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.success__button')
    .addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successButtonListener);
};


const isHashtagValid = (value) => value.length <= 20 && !HashtagRegex.test(value);

export const setupFormValidation = () => {
  const form = document.querySelector('#upload-select-image');

  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    successClass: 'form--valid',
    errorClass: 'form--invalid',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'form__error',
    errorTextTag: 'span',
  });

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    isHashtagValid,
    'Формат хэштега: #anySymbols(<=20)'
  );

  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (isValid) {
      evt.preventDefault();
      closeModal();
      showSuccessMessage();
    } else {
      evt.preventDefault();
    }
  });
};

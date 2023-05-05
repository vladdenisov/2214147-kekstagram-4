import { closeModal } from './imageModal.js';
import { sendData } from '../utils/network.js';
import {isHashtagValid} from '../utils/util.js';
import {showSuccessMessage} from './successMessage.js';
import {showErrorMessage} from './errorMessage.js';

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

  form.addEventListener('submit', async (evt) => {
    const isValid = pristine.validate();
    evt.preventDefault();
    if (isValid) {
      try {
        await sendData(form);
        closeModal();
        showSuccessMessage();
      } catch (e) {
        closeModal(false);
        showErrorMessage();
      }
    }
  });
};

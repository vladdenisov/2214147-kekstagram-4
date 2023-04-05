import {addEffectsListeners, removeEffectsListeners} from './effectsEditor.js';

export const closeModal = () => {
  document.querySelector('#upload-select-image').reset();
  const img = document.querySelector('.img-upload__preview > img');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  img.classList.remove(...img.classList);
  img.classList.add('effects__preview--none');
  removeEffectsListeners();
};

const openModalListener = (e) => {
  const img = document.querySelector('.img-upload__preview > img');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  img.src = window.URL.createObjectURL(e.target.files[0]);
  addEffectsListeners();
};


export const setupModal = () => {
  const uploadFile = document.querySelector('#upload-file');

  uploadFile.addEventListener('change', openModalListener);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  const cancelButton = document.querySelector('#upload-cancel');

  cancelButton.addEventListener('click', () => closeModal());
};

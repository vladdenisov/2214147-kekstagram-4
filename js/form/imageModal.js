import {addEffectsListeners, removeEffectsListeners} from '../editor/effectsEditor.js';

export const closeModal = (reset = true) => {
  if (reset) {
    document.querySelector('#upload-select-image').reset();
    const img = document.querySelector('.img-upload__preview > img');
    img.classList.remove(...img.classList);
    img.classList.add('effects__preview--none');
    img.style.transform = '';
    removeEffectsListeners();
  }
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
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

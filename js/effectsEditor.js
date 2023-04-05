const changeImageScale = (toBigger = true, imagePreview) => {
  const control = document.querySelector('.scale__control--value');

  let value = parseInt(control.value, 10) + (toBigger ? 25 : -25);

  if (value < 25) {
    value = 25;
  }
  if (value > 100) {
    value = 100;
  }

  control.value = `${value}%`;

  imagePreview.style.transform = `scale(${value / 100})`;
};

const radioButtonClickListener = (e) => {
  const img = document.querySelector('.img-upload__preview > img');
  img.classList.remove(...img.classList);
  img.classList.add(`effects__preview--${e.target.value}`);
};

export const addEffectsListeners = () => {
  const imagePreview = document.querySelector('.img-upload__preview > img');
  imagePreview.style.filter = '';

  document.querySelector('.scale__control--smaller')
    .addEventListener('click', () => changeImageScale(false, imagePreview));
  document.querySelector('.scale__control--bigger')
    .addEventListener('click', () => changeImageScale(true, imagePreview));

  const radioButtons = document.querySelectorAll('.effects__radio');
  radioButtons.forEach((button) => {
    button.addEventListener('click', radioButtonClickListener);
  });
};

export const removeEffectsListeners = () => {
  const imagePreview = document.querySelector('.img-upload__preview > img');
  document.querySelector('.scale__control--smaller').removeEventListener('click', () => changeImageScale(false, imagePreview));
  document.querySelector('.scale__control--bigger').removeEventListener('click', () => changeImageScale(true, imagePreview));
  const radioButtons = document.querySelectorAll('.effects__radio');
  radioButtons.forEach((button) => {
    button.removeEventListener('click', radioButtonClickListener);
  });
};



const getSlider = () => document.querySelector('.effect-level__slider');

const getCurrentFilter = () => document.querySelector('input[name="effect"]:checked').value;

const getImagePreview = () => document.querySelector('.img-upload__preview > img');

const getLevelInput = () => document.querySelector('.effect-level__value');

const getFiltersContainer = () => document.querySelector('.effects__list');

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

const addEffect = (imagePreview, value) => {
  const filter = getCurrentFilter();
  switch (filter) {
    case 'chrome': {
      imagePreview.style.filter = `grayscale(${value})`;
      break;
    }
    case 'sepia':{
      imagePreview.style.filter = `sepia(${value})`;
      break;
    }
    case 'marvin': {
      imagePreview.style.filter = `invert(${value}%)`;
      break;
    }
    case 'phobos': {
      imagePreview.style.filter = `blur(${value}px)`;
      break;
    }
    case 'heat':{
      imagePreview.style.filter = `brightness(${value})`;
      break;
    }
    default: {
      imagePreview.style.filter = '';
      break;
    }
  }
};

const updateSlider = (imagePreview, filter) => {
  const slider = getSlider();
  switch(filter) {
    case 'sepia':
    case 'chrome': {
      slider.noUiSlider.updateOptions({
        start: 0.5,
        step: 0.1,
        range: {
          'min': 0,
          'max': 1
        },
      });
      break;
    }
    case 'marvin': {
      slider.noUiSlider.updateOptions({
        start: 30,
        step: 1,
        range: {
          'min': 0,
          'max': 100
        },
      });
      break;
    }
    case 'phobos': {
      slider.noUiSlider.updateOptions({
        start: 1.5,
        step: 0.1,
        range: {
          'min': 0,
          'max': 3
        },
      });
      break;
    }
    case 'heat': {
      slider.noUiSlider.updateOptions({
        start: 2,
        step: 0.1,
        range: {
          'min': 1,
          'max': 3
        },
      });
      break;
    }
    case 'none': {
      imagePreview.style.filter = '';
      break;
    }
  }
};


const radioButtonClickListener = (e) => {
  const img = getImagePreview();
  img.classList.remove(...img.classList);
  img.classList.add(`effects__preview--${e.target.value}`);
  updateSlider(img, e.target.value);
};

export const addEffectsListeners = () => {
  const imagePreview = getImagePreview();
  imagePreview.style.filter = '';

  document.querySelector('.scale__control--smaller')
    .addEventListener('click', () => changeImageScale(false, imagePreview));
  document.querySelector('.scale__control--bigger')
    .addEventListener('click', () => changeImageScale(true, imagePreview));

  const levelInput = document.querySelector('.effect-level__value');

  const slider = getSlider();

  noUiSlider.create(slider, {
    start: 0.5,
    step: 0.1,
    range: {
      'min': 0,
      'max': 1
    },
  }
  );

  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    addEffect(imagePreview, value);
    levelInput.value = value;
  });


  getFiltersContainer().addEventListener('change', radioButtonClickListener);
};

export const removeEffectsListeners = () => {
  const imagePreview = document.querySelector('.img-upload__preview > img');
  document.querySelector('.scale__control--smaller').removeEventListener('click', () => changeImageScale(false, imagePreview));
  document.querySelector('.scale__control--bigger').removeEventListener('click', () => changeImageScale(true, imagePreview));
  getLevelInput().value = '';
  getFiltersContainer().removeEventListener('change', radioButtonClickListener);
};



import {
  getCurrentFilter,
  getFiltersContainer,
  getImagePreview,
  getLevelInput, getScaleControl,
  getSlider,
  getSliderParent
} from './getElements.js';
import {updateSlider} from './updateSlider.js';
import {getComputedFilter} from './getComputedFilter.js';
import {changeImageScale} from './changeImageScale.js';

const addEffect = (imagePreview, value) => {
  const filter = getCurrentFilter();
  imagePreview.style.filter = getComputedFilter(filter, value);
};

const radioButtonClickListener = (e) => {
  const img = getImagePreview();
  img.classList.remove(...img.classList);
  img.classList.add(`effects__preview--${e.target.value}`);
  updateSlider(e.target.value, img, getSlider(), getSliderParent());
};

export const addEffectsListeners = () => {
  const imagePreview = getImagePreview();
  imagePreview.style.filter = '';

  const scaleControl = getScaleControl();

  document.querySelector('.scale__control--smaller')
    .addEventListener('click', () => changeImageScale(-25, imagePreview, scaleControl));
  document.querySelector('.scale__control--bigger')
    .addEventListener('click', () => changeImageScale(+25, imagePreview, scaleControl));

  const levelInput = document.querySelector('.effect-level__value');

  const slider = getSlider();

  noUiSlider.create(slider, {
    start: 0.5,
    step: 0.1,
    range: {
      'min': 0,
      'max': 1
    },
  });

  const sliderParent = getSliderParent();

  sliderParent.style.display = 'none'; // Hide slider by default

  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    addEffect(imagePreview, value);
    levelInput.value = value;
  });

  getFiltersContainer().addEventListener('change', radioButtonClickListener);
};

export const removeEffectsListeners = () => {
  const imagePreview = document.querySelector('.img-upload__preview > img');
  const scaleControl = getScaleControl();

  document.querySelector('.scale__control--smaller')
    .removeEventListener('click', () => changeImageScale(-25, imagePreview, scaleControl));
  document.querySelector('.scale__control--bigger')
    .removeEventListener('click', () => changeImageScale(+25, imagePreview, scaleControl));
  getLevelInput().value = '';
  getFiltersContainer().removeEventListener('change', radioButtonClickListener);
  const slider = getSlider();
  slider.noUiSlider.destroy();
};

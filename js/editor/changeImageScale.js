export const changeImageScale = (delta, imagePreview, control) => {
  const value = parseInt(control.value, 10) + delta;

  if (value > 100 || value < 25) {
    return;
  }

  control.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

const createImagePreview = (url, description) => {
  const image = document.createElement('img');
  image.classList.add('picture__img');
  image.setAttribute('src', url);
  image.setAttribute('width', 182);
  image.setAttribute('height', 182);
  image.setAttribute('alt', description);
  return image;
};

const createImageComments = (comments) => {
  const imageComments = document.createElement('span');
  imageComments.classList.add('picture__comments');
  imageComments.append(comments);
  return imageComments;
};

const createImageLikes = (likes) => {
  const imageLikes = document.createElement('span');
  imageLikes.classList.add('picture__likes');
  imageLikes.append(likes);
  return imageLikes;
};

const createImageInfo = (comments, likes) => {
  const imageInfoContainer = document.createElement('p');
  imageInfoContainer.classList.add('picture__info');

  imageInfoContainer.append(createImageComments(comments), createImageLikes(likes));
  return imageInfoContainer;
};


const createPictureFromData = ({url, description, comments, likes}) => {
  const picture = document.createElement('a');
  picture.setAttribute('href', '#');
  picture.classList.add('picture');

  picture.append(createImagePreview(url, description), createImageInfo(comments, likes));
  return picture;
};


export const displayData = (data) => {
  const resultFragment = new DocumentFragment();

  const children = data.map((picture) => createPictureFromData(picture));
  resultFragment.append(...children);

  const container = document.querySelector('.pictures');
  container.appendChild(resultFragment);
};

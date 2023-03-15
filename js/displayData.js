const createPictureFromData = (data) => {
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  a.classList.add('picture');

  const img = document.createElement('img');
  img.classList.add('picture__img');
  img.setAttribute('src', data.url);
  img.setAttribute('width', 182);
  img.setAttribute('height', 182);
  img.setAttribute('alt', data.description);

  const p = document.createElement('p');
  p.classList.add('picture__info');

  const commentsSpan = document.createElement('span');
  commentsSpan.classList.add('picture__comments');
  commentsSpan.append(data.comments);

  const likesSpan = document.createElement('span');
  likesSpan.classList.add('picture__likes');
  likesSpan.append(data.likes);

  p.append(commentsSpan, likesSpan);

  a.append(img, p);

  return a;
};


export const displayData = (data) => {
  const resultFragment = new DocumentFragment();


  data.forEach((picture) => {
    resultFragment.appendChild(createPictureFromData(picture));
  });

  const container = document.querySelector('.pictures');

  container.appendChild(resultFragment);
};

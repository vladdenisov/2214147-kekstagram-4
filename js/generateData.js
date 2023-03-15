import { getRandomPositiveInteger } from './util.js';
export const generateData = (length = 25) => {
  const result = [];

  const comments = [
    'Посмотрите какая красота!',
    'Ваууу!!',
    'Блин, какая красота!',
    'Супер фотка получилась!',
    'Ну как прикольно вышло'
  ];

  for (let i = 1; i < length + 1; i++) {
    let id = i;
    if (i > 25) {
      id = getRandomPositiveInteger(1, 25);
    }

    result.push({
      id,
      url: `photos/${id}.jpg`,
      description: comments[getRandomPositiveInteger(0, comments.length - 1)],
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    });
  }
  return result;
};

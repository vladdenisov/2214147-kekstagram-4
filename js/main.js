function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

function generateData() {
  const usedIds = [];

  const result = [];

  for (let i = 0; i < 25; i++) {
    let id = getRandomPositiveInteger(1, 25);

    while (id in usedIds) {
      id = getRandomPositiveInteger(1, 25);
    }

    usedIds.push(id);

    result.push({
      id,
      url: `photos/${id}.jpg`,
      description: 'Test',
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    });
  }
  return result;
}

checkStringLength('Test');

generateData();

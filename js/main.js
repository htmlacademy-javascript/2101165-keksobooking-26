//Подглядел решение с вкючением интревальных значений на MDN
function getRandomInt (min, max) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0.1, 0.3);

function getRandomFloat (min, max) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  return Math.random() * (max - min) + min;
}

getRandomFloat(-0.8, 0.8);

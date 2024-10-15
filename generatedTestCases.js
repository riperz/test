const maxAreaResult = (input) => {
  let maxWater = 0;
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    maxWater = Math.max(
      maxWater,
      Math.min(input[left], input[right]) * (right - left)
    );
    input[left] < input[right] ? left++ : right--;
  }

  return maxWater;
};

const generateRandomArray = (length, min, max) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const input = Array.from({ length: 5 }, () => {
  const input = generateRandomArray(10, 1, 100);
  const expected = maxAreaResult(input);
  return { input, expected };
});

module.exports = input;

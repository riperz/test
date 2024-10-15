const maxArea = require("./testCases");
const input = require("./generatedTestCases");

input.forEach((test, index) => {
  const result = maxArea(test.input);
  console.log(
    `Test ${index + 1}:`,
    result === test.expected
      ? `Passed result: ${result}`
      : `Failed (Expected ${test.expected}, got ${result})`
  );
});

module.export = input;

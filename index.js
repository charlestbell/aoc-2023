const fs = require("fs");

const anyNumberRegex =
  /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi;

const data = fs.readFileSync("input.txt", { encoding: "utf8", flag: "r" });

const lines = data.split(/\r?\n/);

const parsed = lines.map((line) => {
  const numbersFromLine = [...line.matchAll(anyNumberRegex)];
  const parsedNumbersFromLine = numbersFromLine.map((number) => {
    return number[1];
  });

  const parsedNumbers = parsedNumbersFromLine.map((number) => {
    switch (number) {
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      case "four":
        return 4;
      case "five":
        return 5;
      case "six":
        return 6;
      case "seven":
        return 7;
      case "eight":
        return 8;
      case "nine":
        return 9;
      default:
        return number;
    }
  });
  return `${parsedNumbers[0]}${parsedNumbers[parsedNumbers.length - 1]}`;
});
const result = parsed.reduce((accumulator, currentValue) => {
  return parseInt(accumulator) + parseInt(currentValue);
});

console.log("RESULT", result);

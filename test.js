const text = "eightwo";
// const spelledNumberRegex = /(?=(two|eight|\d))/g;
const anyNumberRegex =
  /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi;
// const spelledNumberRegex =
//   /(one|two|three|four|five|six|seven|eight|nine|\d)/gi;
const spelledNumbers = [...text.matchAll(anyNumberRegex)];

console.log("Spelled Numbers:", spelledNumbers);

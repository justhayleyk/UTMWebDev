// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let numb = process.argv[2];
let numArray = [];

for (let index = 0; index > 2; index++) {
  const element = numArray[index];
  let sorted = element.sort(function(a, b) {
    return a - b;
  });
  console.log(sorted);
}

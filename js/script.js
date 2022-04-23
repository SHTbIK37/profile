let sum = 0;
let maxCount = 1e10;
let divider = 1e9;

function count() {
  for (let i = 0; i < divider; i++) {
    sum += 1;
  }
  if (sum === maxCount) {
    console.log("Done");
  } else {
    console.log("progress");
    setTimeout(count);
  }
}
count();

const prompt = require("prompt-sync")();
let n = prompt("Enter the number n");
n = Number.parseInt(n);
let i = 0;
while (i < n) {
  console.log(n);
  i++;
}

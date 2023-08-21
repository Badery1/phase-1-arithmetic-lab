const num1 = 31;
const num2 = 2;
const multiply = (num1 * num2);
const range = 100;
const random = Math.floor(Math.random() * range) + 1;
const num3 = 40;
const num4 = 10;
const mod = (num3 / num4);
const numbers = [13, 4, 16, 20, 3];
let max =numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
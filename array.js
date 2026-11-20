let numbers = [10, 89, 23, 5, 23, 43, 42, 46, 78, 95];

let sum = 0;
let avg = 0;
let large = 0;
let small = numbers[0];

for (let num of numbers) {
    sum += num;
    avg = sum / numbers.length;

}
console.log("Total sum is :", sum);
console.log("Average number is :", avg);


for (let i = 0; i < numbers.length; i++) {
    if (large < numbers[i]) {
        large = numbers[i];

    }

    if(small>numbers[i+1]){
        small = numbers[i+1];

    }
}
console.log("LargeNumber  is :", large);
console.log("SmallNumber  is :", small);


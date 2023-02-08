const array: Array<number> = [1, 3, 5];

const arrayString: string[] = [
  "Jeff",
  "Luca",
  "Carlo",
  "Jeff",
  "Luca",
  "Carlo",
  "Jeff",
  "Luca",
  "Carlo",
];

console.log(arrayString.length);

for (let i = 0; i < arrayString.length; i++) {
  console.log(arrayString[i] === "Jeff");
}

//find - stops and returns the first element that satisfies the given condition
const find = array.find((num) => num > 3);
console.log(find);

//every - loop through the entire array and check if all items pass the given condition
const every = array.every((num) => num % 1 === 0);
console.log(every);

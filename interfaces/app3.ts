const array: Array<number> = [1, 2, 3, 4, 5];

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

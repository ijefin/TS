const array: Array<number> = [1, 2, 3];

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

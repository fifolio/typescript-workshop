console.clear();

//TODO: functions, optional parameter, default parameter,
function greetUse(word: string, name?: string, age: string = "privet"): void {
  if (name === undefined) {
    name = "friend";
  }
  console.log(`${word}, ${name}, ${age} years old`);
}
greetUse("Hello", "zaineb", "23");

function sum(x: number, y: number): number {
  return x + y;
}
const res1 = sum(1, 7);
// console.log(res1);

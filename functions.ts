console.clear();

//TODO: never keyword.  never is a type that represents a value that will never occur. It is typically used in situations where a function cannot return anything or will always throw an error.

function allowAccess(name: string): string | never {
  if (name === "lala") {
    return "you can access here";
  }
  // throw new Error("403 - you cannot enter");
}
const res3 = allowAccess("nova");
// console.log(res3);

function throwError(): never {
  throw new Error("There's an error");
}
// throwError();

//TODO: functions, optional parameter, default parameter,
function greetUse(word: string, name?: string, age: string = "privet"): void {
  if (name === undefined) {
    name = "friend";
  }
  console.log(`${word}, ${name}, ${age} years old`);
}
// greetUse("Hello", "zaineb", "23");

function sum(x: number, y: number): number {
  return x + y;
}
const res1 = sum(1, 7);
// console.log(res1);

console.clear();

//TODO: type literals
type specialType = 50 | 60 | 70;
let mynum: specialType = 60;
// console.log(mynum);

type gender = "male" | "female";
let userGender: gender = "male";
console.log(userGender);

//TODO: type alias
type typeA = number | string | boolean | undefined;
let userId: typeA = "vamos";
// console.log(userId);

//TODO: union
let ii: number | string;
ii = "home";
ii = 32;
// console.log(ii);

//TODO: duck type
let ee = { a: 1, b: 2, c: 3, d: 4 };
ee = { a: 2, b: 32, c: 44, d: 321 };
ee = { a: 2, b: 32, c: 44, d: 321 }; //! e: 32, does not exist
// console.log(ee);

//TODO: object
let xx: { a: number; b: number; c: string } = { a: 2, b: 34, c: "x" };
xx.a = 432;
xx.c = "yesorno";
// console.log(xx);

//TODO: unknown
let un: any = 5;
let ab: number = un;
// console.log(un, ab);

let aa: unknown = 80;
// assign <number> type to aa
let bb: number = <number>aa;
// console.log(bb);

let qq: unknown = 70;
let ww: string = <string>qq;
// console.log(ww);

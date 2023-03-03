"use strict";
console.clear();
//TODO: functions, optional parameter, default parameter,
function greetUse(word, name, age = "privet") {
    if (name === undefined) {
        name = "friend";
    }
    console.log(`${word}, ${name}, ${age} years old`);
}
greetUse("Hello", "zaineb", "23");
function sum(x, y) {
    return x + y;
}
const res1 = sum(1, 7);
// console.log(res1);

"use strict";
console.clear();
function displayInfo(x) {
    console.log(`
        This human can thing and feel. His/her IQ is ${x.iq} and s/he is from ${x.country}
    `);
    return x;
}
const h1 = {
    canFeel: true,
    canThink: true,
    iq: 75,
    country: "USA",
};
const result = displayInfo(h1);
//! console.log(result);
const displayLength = (i) => {
    console.log(i.length);
    return i;
};
const myfun = displayLength([1, 2, 3, 4]);
//! console.log(myfun);
let age = 3;
function retureValue(x) {
    return x;
}
//* when adding <type> after the function name, this is called Casting
const res = retureValue(age);
//! console.log(res);

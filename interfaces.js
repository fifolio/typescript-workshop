"use strict";
console.clear();
let user1 = {
    firstName: "danial",
    lastName: "johansbourg",
    id: 5410093,
    active: true,
};
// console.log(user1);
let user2 = {
    firstName: "Hadi",
    lastName: "Van",
    id: 232453,
    active: false,
};
const displayUser = (user) => {
    console.log(`
        ${user.id} - ${user.firstName} ${user.lastName}, ${user.active}
        `);
    return user;
};
let users = { a: 4, b: 23, c: "someone" };
// console.log(users);

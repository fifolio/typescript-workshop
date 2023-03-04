console.clear();

interface User {
  firstName: string;
  lastName: string;
  id: number;
  active: boolean;
}

let user1: User = {
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

const displayUser = (user: User): User => {
  console.log(
    `
        ${user.id} - ${user.firstName} ${user.lastName}, ${user.active}
        `
  );
  return user;
};

// displayUser(user2);

interface XYZ {
  a: number;
  b: number;
  c: string;
}

let users: XYZ = { a: 4, b: 23, c: "someone" };
// console.log(users);

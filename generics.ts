console.clear();

interface Human {
  canFeel: true;
  canThink: true;
  iq: number;
  country: string;
}

function displayInfo<Type extends Human>(x: Type): Type {
  console.log(`
        This human can thing and feel. His/her IQ is ${x.iq} and s/he is from ${x.country}
    `);
  return x;
}

const h1: Human = {
  canFeel: true,
  canThink: true,
  iq: 75,
  country: "USA",
};

const result = displayInfo(h1);
//! console.log(result);

const displayLength = <T>(i: T[]): T[] => {
  console.log(i.length);
  return i;
};

const myfun = displayLength([1, 2, 3, 4]);
//! console.log(myfun);

let age = 3;

function retureValue<MyType>(x: MyType): MyType {
  return x;
}

//* when adding <type> after the function name, this is called Casting
const res = retureValue<number>(age);
//! console.log(res);

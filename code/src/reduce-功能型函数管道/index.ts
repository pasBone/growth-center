const double = (x: number) => x + x;
const triple = (x: number) => 3 * x;
const quadruple = (x: number) => 4 * x;

// Function composition enabling pipe functionality
// const pipe = (...functions) => input => functions.reduce(
//   (acc, fn) => fn(acc),
//   input
// );

const pipe = (...funcs: Array<Function>) => {
  return (input: number) => {
    funcs.reduce((val, func) => {
      return func(val)
    }, input);
  }
}


// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240


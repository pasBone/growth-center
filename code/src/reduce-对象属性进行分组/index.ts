var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const result3 = people.reduce((obj: IPlainObject, current, index, array) => {
  var key = obj[current.age];
  if (!key) {
    obj[current.age] = [current]
  } else {
    obj[current.age].push(current);
  }
  return obj;
}, {});
console.log(result3);

// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
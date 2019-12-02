
var arr = [[0, 1], [2, 3], [4, 5]];

var result: Array<number> = [];
arr.forEach(item => {
  result = result.concat(item)
});

const result1 = arr.reduce((init, current) => init.concat(current), []);


console.log(result);
console.log(result1);
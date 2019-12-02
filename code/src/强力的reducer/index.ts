// 同时做到map + filter的效果
const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList: Array<number>, num) => {
  num = num * 2; //double each number (i.e. map)
  if (num > 50) {
    finalList.push(num);
  }
  return finalList;
}, []);

console.log('doubledOver50: ', doubledOver50);  //[ 60, 80 ]

function map(arr: Array<any>, exec: Function) {
  return arr.reduce((result, next, index) => {
    result.push(exec(next, index));
    return result;
  }, []);
}
console.log(
  '模拟map: ',
  map([1, 2, 3, 4, 5], (item: number) => item * 2)
);
//[ 2, 4, 6, 8, 10 ]

function filter(arr: Array<number>, exec: Function) {
  return arr.reduce((result: Array<number>, next: number, index: number) => {
    const res = exec(next, index);
    if (res) {
      result.push(next);
    }
    return result;
  }, []);
}

console.log(
  '模拟filter: ',
  filter([1, 2, 3, 4, 5], (item: number) => item % 2 == 0)
);
//[ 2, 4]
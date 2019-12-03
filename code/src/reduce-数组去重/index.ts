var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];


const result4 = myArray.reduce((arr, current) => {
  if (!arr.includes(current)) {
    arr.push(current)
  }
  return arr;
}, []);

console.log(result4);
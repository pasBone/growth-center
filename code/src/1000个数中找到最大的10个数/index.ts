

function maxNumber() {

  let length = 20;
  var numbers = new Array(length).fill(undefined);

  for (let i = 0; i < length; i++) {
    numbers[i] = (Math.random() * 1000).toFixed(0)
  }
  console.log(numbers);

  const res = numbers.sort((a, b) => b - a).splice(0, 10);
  console.log(res);

}

maxNumber();
// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    console.log('p1');
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    console.log('p2');
    setTimeout(_ => {
      resolve(a * 2);
    }, 1000)
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  console.log('f3');
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    console.log('p4');
    resolve(a * 4);
  });
}

function promiseChain(arr: Array<Function>, input: number) {
  return arr.reduce((chain, func) => {
    return chain.then((arg) => {
      return func(arg);
    });
  }, Promise.resolve(input));
}

promiseChain([p1, p2, f3, p4], 10).then((res: any) => {
  console.log(res);
})
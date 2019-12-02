var cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];

const res = cars.reduce((initObj: IPlainObject, next: string) => {
  initObj[next] = initObj[next] ? ++initObj[next] : 1
  return initObj;
}, {});

console.log(res);
//{ BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
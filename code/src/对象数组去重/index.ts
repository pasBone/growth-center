/**
 * @description 对象数组去重 版本1
 * @param arr 数组源
 * @param reciver 方法
 */
export function uniq<T extends any>(arr: T[], reciver: (current: T) => any) {

  let hashMap = new Map<any, number>();
  return arr.reduce<T[]>((previous, current) => {
    const i = hashMap.get(reciver(current));
    if (i !== void 0) {
      previous[i] = current;
    } else {
      hashMap.set(current.id, previous.push(current) - 1);
    }
    return previous;
  }, [])
}

/**
 * @description 对象数组去重 版本2. 比较Low
 * @param arr 数组源
 * @param reciver 方法
 */
// export function uniq<T extends any>(arr: T[], reciver: (current: T) => any) {
//   let res: IPlainObject = {};
//   let uniArr: T[] = [];
//   arr.forEach(element => {
//     res[reciver(element)] = element;
//   });
//   for (let key in res) {
//     uniArr.push(res[key])
//   }
//   return uniArr;
// }

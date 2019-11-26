
/**
 * @description 对象数组去重
 * @param arr 数组源
 * @param reciver 方法
 */
export function uniq<T extends any>(arr: T[], reciver: (currentrent: T) => any) {

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

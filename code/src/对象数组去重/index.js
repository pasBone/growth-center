"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description 对象数组去重 版本1
 * @param arr 数组源
 * @param reciver 方法
 */
function uniq(arr, reciver) {
    let hashMap = new Map();
    return arr.reduce((previous, current) => {
        const i = hashMap.get(reciver(current));
        if (i !== void 0) {
            previous[i] = current;
        }
        else {
            hashMap.set(current.id, previous.push(current) - 1);
        }
        return previous;
    }, []);
}
exports.uniq = uniq;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQWdCLEdBQVEsRUFBRSxPQUE0QjtJQUV4RSxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMzQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ1IsQ0FBQztBQVpELG9CQVlDO0FBRUQ7Ozs7R0FJRztBQUNILGdGQUFnRjtBQUNoRixnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qix1Q0FBdUM7QUFDdkMsUUFBUTtBQUNSLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsTUFBTTtBQUNOLG1CQUFtQjtBQUNuQixJQUFJIn0=
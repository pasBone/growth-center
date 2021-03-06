"use strict";
// 同时做到map + filter的效果
const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num) => {
    num = num * 2; //double each number (i.e. map)
    if (num > 50) {
        finalList.push(num);
    }
    return finalList;
}, []);
console.log('doubledOver50: ', doubledOver50); //[ 60, 80 ]
function map(arr, exec) {
    return arr.reduce((result, next, index) => {
        result.push(exec(next, index));
        return result;
    }, []);
}
console.log('模拟map: ', map([1, 2, 3, 4, 5], (item) => item * 2));
//[ 2, 4, 6, 8, 10 ]
function filter(arr, exec) {
    return arr.reduce((result, next, index) => {
        const res = exec(next, index);
        if (res) {
            result.push(next);
        }
        return result;
    }, []);
}
console.log('模拟filter: ', filter([1, 2, 3, 4, 5], (item) => item % 2 == 0));
//[ 2, 4]
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXNCO0FBQ3RCLE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQXdCLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQywrQkFBK0I7SUFDOUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1FBQ1osU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBRSxZQUFZO0FBRTVELFNBQVMsR0FBRyxDQUFDLEdBQWUsRUFBRSxJQUFjO0lBQzFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQ1QsU0FBUyxFQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0FBQ0Ysb0JBQW9CO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQWtCLEVBQUUsSUFBYztJQUNoRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFxQixFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN2RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksR0FBRyxFQUFFO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUNULFlBQVksRUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3pELENBQUM7QUFDRixTQUFTIn0=
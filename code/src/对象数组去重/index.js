"use strict";
exports.__esModule = true;
/**
 * @description 对象数组去重
 * @param arr 数组源
 * @param reciver 方法
 */
function uniq(arr, reciver) {
    var hashMap = new Map();
    return arr.reduce(function (previous, current) {
        var i = hashMap.get(reciver(current));
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply(fn, context, args) {
    context = context || window;
    context.fn = fn;
    // let result = eval('context.fn(' + args + ')');
    // delete context.fn;
    // return result;
    return context.fn(...args);
}
exports.apply = apply;
var obj = {
    name: 'lastWhisper',
    getName: function (args) {
        console.log(this.name, args);
    }
};
var obj2 = {
    name: 'no.no.no'
};
// obj.getName.apply(obj2, ['haha']);
apply(obj.getName, obj2, ['haha']);
// no.no.no haha
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLEtBQUssQ0FBQyxFQUFNLEVBQUUsT0FBWSxFQUFFLElBQWdCO0lBQzFELE9BQU8sR0FBRyxPQUFPLElBQUksTUFBTSxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLGlEQUFpRDtJQUNqRCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLE9BQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFQRCxzQkFPQztBQUVELElBQUksR0FBRyxHQUFHO0lBQ1IsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLFVBQVUsSUFBUztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7QUFFRCxJQUFJLElBQUksR0FBRztJQUNULElBQUksRUFBRSxVQUFVO0NBQ2pCLENBQUE7QUFFRCxxQ0FBcUM7QUFDckMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNuQyxnQkFBZ0IifQ==
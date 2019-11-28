"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bind(fn, vm, ...args) {
    return () => fn.apply(vm, args);
}
exports.bind = bind;
var obj = {
    name: 'lastWhisper',
    getName: function (args) {
        console.log(this.name, args);
    }
};
var obj2 = {
    name: 'lastWhisper2'
};
bind(obj.getName, obj2, 'hahha')();
// xiongxiaojun2 hahha
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLElBQUksQ0FBbUQsRUFBSyxFQUFFLEVBQU0sRUFBRSxHQUFHLElBQVU7SUFDakcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRkQsb0JBRUM7QUFFRCxJQUFJLEdBQUcsR0FBRztJQUNSLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxVQUFVLElBQVM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBO0FBRUQsSUFBSSxJQUFJLEdBQUc7SUFDVCxJQUFJLEVBQUUsY0FBYztDQUNyQixDQUFBO0FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDbkMsc0JBQXNCIn0=
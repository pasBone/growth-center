import { Fn } from "../shared";

export function apply(fn: Fn, context: any, args: Array<any>) {
  context = context || window;
  context.fn = fn;
  // let result = eval('context.fn(' + args + ')');
  // delete context.fn;
  // return result;
  return context.fn(...args);
}

var obj = {
  name: 'lastWhisper',
  getName: function (args: any) {
    console.log(this.name, args);
  }
}

var obj2 = {
  name: 'no.no.no'
}

// obj.getName.apply(obj2, ['haha']);
apply(obj.getName, obj2, ['haha']);
// no.no.no haha
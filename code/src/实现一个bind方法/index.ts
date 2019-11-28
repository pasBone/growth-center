import { Fn } from "../shared";

export function bind<F extends Fn, Vm extends any, Args extends any[]>(fn: F, vm: Vm, ...args: Args) {
  return () => fn.apply(vm, args);
}

var obj = {
  name: 'lastWhisper',
  getName: function (args: any) {
    console.log(this.name, args);
  }
}

var obj2 = {
  name: 'lastWhisper2'
}

bind(obj.getName, obj2, 'hahha')();
// xiongxiaojun2 hahha

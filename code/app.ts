// 基本数据类型
let num = 25;
let flo = 25.5;
let hex = 0xf000;

// 重新赋值
// num = '25';  // 不能存储非原有类型的数据
num = 24.8;

// ts原型
let num2 = 28;  // 等同于  let num2：number = 28;

// boolean
let isLogin:boolean = false;
// isLogin = 1;   // 报错


// string
let str:string = 'Hello Salen';

// any
let anything:any = 28;
anything = 'Hello';
/* ---------------- 基本数据类 ---------------- */

/* ------ Boolean 布尔值 ------ */
let isLogin: boolean = false;
// isLogin = 0;   // 报错


/* ------ String 字符串 ------ */
let str: string = 'Hello Salen';
str = 'Hellen';

/* ------ Number 数字 ------ */
let num = 28;  // 等同于  let num：number = 28;
// num = '25';  // 报错，不能存储非原有类型的数据

/* ------ Array 数组 ------ */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let list3: string[] = ['white', 'black'];


/* ------ Tuple 元组 ------ */
let tuple1: [string, number] = ['salen', 28];


/* ------ enum 枚举 ------ */
enum Color { Red=1, Green, Blue }
let c: Color = Color.Green;
let colorName:string = Color[3];
console.log(c);
console.log('colorName:',colorName);


/* ------ Any ------ */
let anything: any = 28;
anything = 'Hello';

let list4:any[] = [1,'salen',true];
console.log('list4:',list4[2]);


/* ------ Void ------ */



/* ------ Null & Undefined ------ */



/* ------ Object 对象 ------ */
// Object表示非原始类型，即就是除number,string,boolean,symbol,null和undefined之外的类型

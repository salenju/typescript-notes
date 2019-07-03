"use strict";
/* ---------------- 基本数据类 ---------------- */
/* ------ Boolean 布尔值 ------ */
var isLogin = false;
// isLogin = 0;   // 报错
/* ------ String 字符串 ------ */
var str = 'Hello Salen';
str = 'Hellen';
/* ------ Number 数字 ------ */
var num = 28; // 等同于  let num：number = 28;
// num = '25';  // 报错，不能存储非原有类型的数据
/* ------ Array 数组 ------ */
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var list3 = ['white', 'black'];
/* ------ Tuple 元组 ------ */
var tuple1 = ['salen', 28];
/* ------ enum 枚举 ------ */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[3];
console.log(c);
console.log('colorName:', colorName);
/* ------ Any ------ */
var anything = 28;
anything = 'Hello';
var list4 = [1, 'salen', true];
console.log('list4:', list4[2]);
/* ------ Void ------ */
/* ------ Null & Undefined ------ */
/* ------ Object 对象 ------ */
// Object表示非原始类型，即就是除number,string,boolean,symbol,null和undefined之外的类型

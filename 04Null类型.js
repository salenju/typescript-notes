"use strict";
// union 类型
var unionType = 12;
unionType = "12";
unionType = true;
// 检查类型
var checkType = 10;
if (typeof checkType == "string") {
    console.log("类型检查通过");
}
// null和undefine
var myNull = null;
myNull = undefined;
/* --------------- never 类型使用场景 --------------- */
// 场景1：抛出异常
function error(msg) {
    throw new Error(msg);
}
// 场景2：死循环
function loop() {
    while (true) { }
}

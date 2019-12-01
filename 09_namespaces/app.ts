// 多重命名空间

/** 文件引入方式-1
 * 在命令行中 执行 "tsc --outfile app.js circle.ts sumValue.ts app.ts"将circle.ts、sumValue.ts、app.ts合并打包到app.js中
*/

/** 文件引入方式-2
 *  step1: "/// <reference path="circle.ts" />" 如此，引入所需.ts文件
 *  step2: 在命令行中 执行 "tsc --outFile app.js app.ts"
 * 
*/

/// <reference path="circle.ts" />
/// <reference path="sumValue.ts" />

console.log(MyMath2.sumValue(15, 10));
console.log(MyMath2.Circle.calcCircle(8));



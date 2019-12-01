"use strict";
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    // 定义的属性或者方法需要export出去，否则会报错
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
    function calcCircle(value) {
        return MyMath.PI * value;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
var PI = 2.14;
console.log(MyMath.sumValue(5, 10));
console.log(MyMath.calcCircle(5));
console.log(PI);
console.log(MyMath.PI);

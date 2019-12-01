"use strict";
// class set & get 修饰词 用于隔离私有属性和公开属性
// class 静态属性和方法
var Person2 = /** @class */ (function () {
    function Person2() {
        this._name = "Salen";
    }
    // 静态方法
    Person2.calcCircle = function (value) {
        return this.PI * value;
    };
    Object.defineProperty(Person2.prototype, "setName", {
        // 私有属性赋值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person2.prototype, "getName", {
        // 私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Person2.PI = 3.14; // 静态属性
    return Person2;
}());
var person2 = new Person2();
console.log(person2.getName);
person2.setName = "Helen";
console.log(person2.getName);
// console.log("==>person2.PI:",person2.PI);
console.log("==>静态属性:", Person2.PI);
console.log("==>静态方法:", Person2.calcCircle(3));

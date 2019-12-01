"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class类
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.gender = "男";
        this.age = 29; // 私有属性，只能在Person类中使用
        this.name = name;
        this.userName = userName;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log('==>age:', this.age);
    };
    ;
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        console.log('==>gender:', this.gender);
    };
    return Person;
}());
var person = new Person("Salen", "流云");
console.log(person.name);
console.log(person.userName);
person.setAge(27);
// Student类 继承于Person类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, userName, studentId) {
        var _this = _super.call(this, name, userName) || this;
        _this.studentId = studentId;
        return _this;
    }
    return Student;
}(Person));
var salne = new Student("Salen", "流云", 20191201);
console.log('==>Student:', salne);
// salne.setGender("女");

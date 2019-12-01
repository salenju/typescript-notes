"use strict";
// 简单对象
var dataObj = {
    name: "Salen",
    age: 29
};
dataObj = {
    name: "Heleln",
    age: 28
};
// 复杂对象类型
var complex = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log(complex.myfunc(2));
var complex2 = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log(complex2.myfunc(5));

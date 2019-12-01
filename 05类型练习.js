"use strict";
var sumVal = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: "Salen",
    sum: sumVal,
    friends: ["lucy", "Helen"]
};
handleCount.sum.count(500);
console.log(handleCount);

// 简单对象
let dataObj: { name: string, age: number } = {
  name: "Salen",
  age: 29
};

dataObj = {
  name: "Heleln",
  age: 28
};

// 复杂对象类型
let complex: { data: number[], myfunc: (item: number) => number[] } = {
  data: [1, 2, 3],
  myfunc: function (item: number): number[] {
    this.data.push(item);
    return this.data;
  }
};

console.log(complex.myfunc(2));

// type生成类型
type MyType = { data: number[], myfunc: (item: number) => number[] };

let complex2: MyType = {
  data: [1, 2, 3],
  myfunc: function (item: number): number[] {
    this.data.push(item);
    return this.data;
  }
};

console.log(complex2.myfunc(5));

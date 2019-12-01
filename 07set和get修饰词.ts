// class set & get 修饰词 用于隔离私有属性和公开属性
// class 静态属性和方法

class Person2 {
  private _name: string = "Salen";
  static PI: number = 3.14; // 静态属性

  // 静态方法
  static calcCircle(value: number): number {
    return this.PI * value;
  }

  // 私有属性赋值
  set setName(value: string) {
    this._name = value;
  }

  // 私有属性取值
  get getName() {
    return this._name;
  }
}

let person2 = new Person2();
console.log(person2.getName);
person2.setName = "Helen";
console.log(person2.getName);
// console.log("==>person2.PI:",person2.PI);
console.log("==>静态属性:", Person2.PI);
console.log("==>静态方法:", Person2.calcCircle(3));
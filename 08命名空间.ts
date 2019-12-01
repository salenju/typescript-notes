namespace MyMath {
  export const PI = 3.14;

  // 定义的属性或者方法需要export出去，否则会报错
  export function sumValue(num1: number, num2: number): number {
    return num1 + num2;
  }

  export function calcCircle(value: number) {
    return PI * value;
  }
}
const PI = 2.14;

console.log(MyMath.sumValue(5, 10));
console.log(MyMath.calcCircle(5));
console.log(PI);
console.log(MyMath.PI);
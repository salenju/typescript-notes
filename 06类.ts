// class类
class Person {
  public name: string;
  protected gender: string = "男";
  private age: number = 29;   // 私有属性，只能在Person类中使用

  constructor(name: string, public userName: string) {
    this.name = name;
    this.userName = userName;
  }

  setAge(age: number) {
    this.age = age;
    console.log('==>age:', this.age);
  };

  private setGender(gender: string) {
    this.gender = gender;
    console.log('==>gender:', this.gender);
  }
}

let person = new Person("Salen", "流云");
console.log(person.name);
console.log(person.userName);
person.setAge(27);

// Student类 继承于Person类
class Student extends Person {
  studentId: number;

  constructor(name: string, userName: string, studentId: number) {
    super(name, userName);
    this.studentId = studentId;
  }
}

const salne = new Student("Salen", "流云", 20191201);
console.log('==>Student:', salne);
// salne.setGender("女");
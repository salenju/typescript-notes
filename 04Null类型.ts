// union 类型
let unionType: number | string | boolean = 12;
unionType = "12";
unionType = true;

// 检查类型
let checkType = 10;
if (typeof checkType == "string") {
  console.log("类型检查通过");
}

// null和undefine
let myNull = null;
myNull = undefined;


/* --------------- never 类型使用场景 --------------- */
// 场景1：抛出异常
function error(msg: string): never {
  throw new Error(msg);
}

// 场景2：死循环
function loop(): never {
  while (true) { }
}


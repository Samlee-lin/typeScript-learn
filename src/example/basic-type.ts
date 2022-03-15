// ts 基础类型
// bool类型
let bool: boolean = false;

// 数值类型
let num: number = 1;
num = 0b1111011  // 二进制
num = 0o173  // 八进制
num = 0x7b   // 十六进制

// 字符串类型
let str: string = 'string'

// 数组类型
let arr1: number[] = [1,2,3];
let arr2: number[] = [1,2,3];
let arr3: (string | number)[] = [1,'2'];

// 元祖类型（类似数组的拓展） 固定长度 一一对应
let tuple: [number,string,object] = [1,'2',{ type: 'object', value: '3' }];

// 枚举类型
enum Roles {
    ADMIN,
    STUDENT,
    TEACHER
}
// console.log(Roles.ADMIN); //0
// console.log(Roles.STUDENT); //1
// console.log(Roles.TEACHER); //3
// 实现原理,编译为js为：
// var Roles;
// (function (Roles) {
//     Roles[Roles["ADMIN"] = 0] = "ADMIN";
//     Roles[Roles["STUDENT"] = 1] = "STUDENT";
//     Roles[Roles["TEACHER"] = 2] = "TEACHER";
// })(Roles || (Roles = {}));


// any类型 (任何类型)
let any: any;
// any = 1;
// any = '12'
// any = false
// const arrAny: any[] = [1,'3', false];

// void类型 （不返回）
const test = (text: string) : void => {
    console.log(text)
}
let v: void
v = undefined
// v = null //关闭strict检查

// null和undefined
let u1: null
u1 = null
let u2
u2 = undefined

// never类型  永远不存在值的类型;eg:抛错、死循环
const error = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true){}
}

// object对象类型 存内存中的引用
let obj: object = {
    name: 'test'
}

// 类型断言  不作类型检查，类似做了类型转换
const getLength = (test : string | number): number => {
    return test as number
    // 或 return test as number
}
// 泛型  约束参数类型

const getArry = <T>(value: T, num: number = 5): T[] => {
    return new Array(num).fill(value)
}
console.log(getArry<number>(1,3))

// 多个泛型变量的使用
const getArry2 = <T, U>(param1: T, param2: U, num: number = 3): [T,U][] => {
    return new Array(num).fill([param1, param2])
}
console.log(getArry2<number, string>(3,'c'))


// 使用泛型定义函数类型
let getArry3: <T>(a: T, num: number) => T[]

// 类型别名
type GetArry = <T>(a: T, num: number) => T[]

// 接口interface
// interface GetArry2<T> {
//     (a: T, time: number): T[]
// }


// 泛型约束
interface ValueWithLength {
    length: number
}
const getArry4 = <T extends ValueWithLength>(a: T, num: number = 3): T[] => {
    return new Array(num).fill(a)
}

// 第二个参数限制在第二个参数中的每一个元素
const getProps = <T, K extends keyof T>(obj: T, propsName: K) => {
    return obj[propsName]
}
const objs = {
    a: '1',
    b: '2'
}
// getProps(objs,'a')  // objs中存在a 正常运行
// getProps(objs,'c')  // objs中不存在c 报错
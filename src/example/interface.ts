interface NameInfo {
    first: string,
    second: string
}

const getFullName = ({ first, second }: NameInfo) : string => {
    return `${first}-${second}`
}

interface Vegetable {
    color?: string, // ? 表示可选属性
    readonly name: string, // readonly表示只读的
    sum: number
}

const getVegetable = ({ color, name, sum }: Vegetable): string => {
    return `${color?color:''}${name}有${sum}个`
}

console.log(getVegetable({
    color: '红色',
    name: '苹果',
    sum: 1
}))

let vegetableObj: Vegetable = {
    name: '橙子',
    sum: 1
}

// vegetableObj.name = '梨'  这里无法复制因为属性name为readonly只读


interface Arrinter {
    0: number,
    1: string
}
let arr: Arrinter = [1,'a']


// 函数式接口  接受num1(number类型) num2(number类型) 返回值为string类型
type addFunc = (num1: number, num2: number) => string
const add: addFunc = (n1, n2) => {
    return `${n1}-${n2}`
}


// 索引值式接口 对象属性为number类型，对象值为string类型
interface RoleDic {
    [id: number]: string
}
let Role1 = {
    1: 'a'
}


// 接口的继承 使用extends继承属性
interface Vegetables {
    color: string
}
interface Tomato extends Vegetables {
    name: string
}
let tomato1 = {
    color: '褐色',
    name: '马铃薯'
}


// 混合类型的接口 ts3.1后支持
interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0;
    return c;
}
const counter: Counter = getCounter();
counter()
console.log(counter.count)
counter();
console.log(counter.count)
counter();
console.log(counter.count)
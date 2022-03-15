/** 函数 */
let addfunc: (x:number,y:number) => number
addfunc = (a1: number, a2: number) => a1 + a2

type Add = (x:number,y:number) => number

// 函数的可选参数定义 z为可选参数
type AddKXFunc = (x: number, y: number, z?: number) => number
let addKXFunc: AddKXFunc
addKXFunc = (x:number, y:number = 3) => x + y   // y默认值为3
// addKXFunc = (x:number, y:number, z:number) => x + y + z

/**
 * const Aruguments = (...args) => {
 * )
 * }
 */

const handelData = (a1: number, ...args: number[]) => {
    //
}

// 函数重载
function getData(x: string): string
function getData(x: number): number
function getData(x: any): any {
    if(typeof x === 'string'){
        return x
    } else {
        return x + 1
    }
}
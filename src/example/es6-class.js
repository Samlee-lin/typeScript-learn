/** 
 * class类
 */
// ES5中创建类与其构造函数
function Point(x,y){  // 定义类
    this.x = x;
    this.y = y;
}
Point.prototype.getPoint = function(){  //给类的原型对象定义方法
    return 'x:' + this.x + '-' + 'y:' + this.y;
}
let p1 = new Point(1,2); // 创建实例
console.log(p1.getPoint());

// ES6中增加了Class
class Point2 {  // 定义class对象
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    getPoint() {  // 给class原型对象定义方法
        return `x:${this.x}-y:${this.y}`
    }
}
const p2 = new Point2(1,2);  // 创建实例
console.log(p2.getPoint());
// 判断
console.log(p2.hasOwnProperty('x')) //判读是否存在属性
console.log(p2.__proto__.hasOwnProperty('getPoint')) //判断是否存在原型方法

// set和get方法
var info = {
    _num: 10,
    set number(num) {
        if(num === 1) {
            console.log('你设置了1')
        } else {
            console.log('你设置了非1')
        }
    },
    get number() {
        console.log('默认返回值:')
        return this._num
    }
}
console.log(info.number)
info.number = 1;
info.number = 10;

// 类中的set和get
class Info {
    constructor(num) {
        this._num = num;
    }
    set number (newNum) {
        this._num = newNum;
    }
    get number () {
        return this._num;
    }
    getMyNumber() {  // 可被实例继承
        console.log('实例继承本方法')
        return this._num;
    }
    static getOwnFunction() {  // static静态方法不可被实例继承，只能类自身调用
        console.log('静态方法只能实例自己调用')
        return Info.name;
    }
}
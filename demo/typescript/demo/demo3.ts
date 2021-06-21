/*
 * @Author: sunyuhang 
 * @Date: 2021-06-12 14:54:40 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-12 16:13:16
 */


//类型注释和类型推断
// const one = 1
// const two = 2
// const three = one + two

function sayHello(): void {
    console.log('Hello World')
}

//永远执行不完返回值never 或者是死循环
function errorFunction(): never {
    throw new Error()
    console.log('aaa')
}

function getNumber({one}: {one: number}) {
    return one
}
const one = getNumber({one: 1})


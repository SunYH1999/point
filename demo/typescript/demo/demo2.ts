/*
 * @Author: sunyuhang 
 * @Date: 2021-06-Th 08:01:24 
 * @Last Modified by:   sunyuhang 
 * @Last Modified time: 2021-06-Th 08:01:24 
 */
const count : number = 1
//类型不可改变，继承number属性和方法


//对象(对象，数组，类，函数)

const Demo: {
    name: string,
    age: number
} = {
    name: 'aa',
    age: 20
}

const demo1: string [] = ['bb', 'cc', 'dd']

class Person {}
const aa: Person = new Person()

const aaa: () => string = () => {return 'aa'}
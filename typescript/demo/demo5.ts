/*
 * @Author: sunyuhang 
 * @Date: 2021-06-13 15:36:42 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-15 18:19:02
 */

//类
class Boss {
    bossInfo:string;
    constructor(public name, public age){
        this.bossInfo = "姓名：" + name + "，年龄：" + age;
    }
}
interface Person4 {
    name:string;
    age:number
}
function greeter4(person:Person4) {
    return "姓名：" + person.name + "，年龄：" + person.age
}
let boss = new Boss("马云",56);
console.log(greeter4(boss))

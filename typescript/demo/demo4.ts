/*
 * @Author: sunyuhang 
 * @Date: 2021-06-12 16:14:22 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-12 17:27:18
 */
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined, undefined]
const arr: (number | string)[] = [1, 'string', 2]






// const demo: {name: string, age: number}[] = [
//     {name: 'a', age:10},
//     {name: 'b', age:11},
//     {name: 'c', age:12}
// ]

//type alias 类型别名
type rule = {name: string, age: number}  //type也可以变成class
const demo: rule[] = [
    {name: 'a', age:10},
    {name: 'b', age:11},
    {name: 'c', age:12}
]

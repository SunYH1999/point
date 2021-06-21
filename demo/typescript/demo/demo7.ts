/*
 * @Author: sunyuhang 
 * @Date: 2021-06-16 15:45:55 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-16 16:28:29
 */

//联合类型和类型保护
interface Student {
    study: boolean
    say: () => {}
}
interface Teacher {
    study: boolean
    skill: () => {}
}
//联合类型
// function judge(person: Student | Teacher) {
//     if(person.study) {
//         (person as Teacher).skill()
//     }else {
//         (person as Student).say()
//     }
// }   


// function judge(person: Student | Teacher) {
//     if('skill' in person) {
//         person.skill()
//     }else {
//         person.say()
//     }
// } 



// function add(first: string | number, second: string | number) {
//     if(typeof first === "string" || typeof second === "string") {
//         return `${first}${second}`
//     }
//     return first + second
// }




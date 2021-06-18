/*
 * @Author: sunyuhang 
 * @Date: 2021-06-18 18:08:43 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-18 19:24:34
 */
//枚举类型
// const Status = {
//     'aa': 0,
//     'bb': 1,
//     'cc':2
// }


enum Status {
    aa,
    bb,
    cc
}


// function getName(status: number) {
//     if(status === 0) {
//         return "00"
//     } else if(status === 1) {
//         return "11"
//     } else if(status === 2) {
//         return "22"
//     } 
// }

function getName(status: any) {
    if(status === Status.aa) {
        return "aa"
    } else if(status === Status.bb) {
        return "bb"
    } else if(status === Status.cc) {
        return "cc"
    } 
}
console.log(Status.aa)

const result = getName(0)

 console.log(result)
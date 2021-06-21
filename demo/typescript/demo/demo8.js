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
var Status;
(function (Status) {
    Status[Status["aa"] = 0] = "aa";
    Status[Status["bb"] = 1] = "bb";
    Status[Status["cc"] = 2] = "cc";
})(Status || (Status = {}));
// function getName(status: number) {
//     if(status === 0) {
//         return "00"
//     } else if(status === 1) {
//         return "11"
//     } else if(status === 2) {
//         return "22"
//     } 
// }
function getName(status) {
    if (status === Status.aa) {
        return "aa";
    }
    else if (status === Status.bb) {
        return "bb";
    }
    else if (status === Status.cc) {
        return "cc";
    }
}
console.log(Status.aa);
var result = getName(0);
console.log(result);

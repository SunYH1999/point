/*
 * @Author: sunyuhang 
 * @Date: 2021-06-13 14:54:01 
 * @Last Modified by: sunyuhang
 * @Last Modified time: 2021-06-13 15:36:08
 */




interface Resume {
    name: string;
    age: number;
    height: number;
    aa?: number; //可选值
    [propname: string]: any;
    say(): string
}

//继承
interface XX extends Resume {
    
}



class Resumes implements Resume {
    name: 'aa'
    age: 19
    height: 170
    aa: 7
    sex: '女'
    say() {
        return 'hhhhhhhhh'
    }
}


const resume = {
    name: 'aa',
    age: 19,
    height: 170,
    aa: 7,
    sex: '女',
    say() {
        return 'hhhhhhhhh'
    }
}

const screenResume = (resume: Resume) => {
    resume.age > 18 && resume.height > 150 && console.log(resume.name + '通过筛选');
    (resume.age <= 18 || resume.height <= 150) && console.log(resume.name + '未通过筛选')
}
const getResume = (resume: Resume) => {
    console.log(resume.name + '年龄:' + resume.age)
    console.log(resume.name + '身高:' + resume.height)
    resume.aa && console.log(resume.name + 'aa:' + resume.aa)
    resume.sex && console.log(resume.name + 'sex:' + resume.sex)
}

screenResume(resume)
getResume(resume)
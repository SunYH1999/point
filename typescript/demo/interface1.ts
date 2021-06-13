//interface接口


// const screenResume = (name: string, age: number, height: number) => {
//     age > 18 && height > 150 && console.log(name + '通过筛选');
//     (age <= 18 || height <= 150) && console.log(name + '未通过筛选')
// }
// const getResume = (name: string, age: number, height: number) => {
//     console.log(name + '年龄：' + age)
//     console.log(name + '身高' + height)
// }




interface Resume {
    name: string;
    age: number;
    height: number;
    aa?: number //可选值
}

const resume = {
    name: 'aa',
    age: 19,
    height: 170,
    aa: 7
}

const screenResume = (resume: Resume) => {
    resume.age > 18 && resume.height > 150 && console.log(resume.name + '通过筛选');
    (resume.age <= 18 || resume.height <= 150) && console.log(resume.name + '未通过筛选')
}
const getResume = (resume: Resume) => {
    console.log(resume.name + '年龄:' + resume.age)
    console.log(resume.name + '身高:' + resume.height)
    resume.aa && console.log(resume.name + 'aa:' + resume.aa)
}

screenResume(resume)
getResume(resume)
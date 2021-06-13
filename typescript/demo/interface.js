//interface接口
var resume = {
    name: 'aa',
    age: 19,
    height: 170,
    aa: 7
};
var screenResume = function (resume) {
    resume.age > 18 && resume.height > 150 && console.log(resume.name + '通过筛选');
    (resume.age <= 18 || resume.height <= 150) && console.log(resume.name + '未通过筛选');
};
var getResume = function (resume) {
    console.log(resume.name + '年龄:' + resume.age);
    console.log(resume.name + '身高:' + resume.height);
    resume.aa && console.log(resume.name + 'aa:' + resume.aa);
};
screenResume(resume);
getResume(resume);

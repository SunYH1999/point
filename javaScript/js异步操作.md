# js异步操作

1.XMLHttpRequest js异步请求

2.$.ajax jquery异步方法

3.axios （很多公司使用的异步请求库）
　　Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
　　官方文档：https://www.kancloud.cn/yunye/axios/234845

4.promise是es6里用来解决回调地狱的方案，主要作用是让代码换了个书写形式，由异步形式换成可读性更好的“同步”形式。

5.es7中的async，await同理

1、async 表示这是一个async函数，await只能用在这个函数里面。
2、await 表示在这里等待promise返回结果了，再继续执行。
3、await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
6.fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
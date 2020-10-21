# this绑定方式

[深入理解](https://www.cnblogs.com/luoyanan/p/11922483.html)

### 默认绑定

默认绑定是指，当直接调用函数，函数前面没有任何修饰的时候，默认将this绑定到当前函数上下文环境。

### 隐式绑定

将this绑定到上下文对象，例如，obj.foo(), foo函数的this即指向obj这个对象

需要注意的是，隐式绑定是将this绑定到离函数最近的对象上，例如，obj1.obj2.foo（），foo函数的this指向obj2

### 显式绑定

通过call，apply函数将this绑定到指定的对象.

### new绑定

当我们通过new创建一个对象时，会自动执行下面的操作；

1. 创建一个全新的对象

2. 这个新的对象被进行[[原型]]连接

3. 将this绑定到这个新的对象上

4. 如果没有返回其他对象，则返回新建的对象。

第三步我们称为new绑定

### 优先级

new>显式>隐式

【1】是否是new绑定？如果是，this绑定的是新创建的对象

var bar = new foo();
　　【2】是否是显式绑定？如果是，this绑定的是指定的对象

var bar = foo.call(obj2);
　　【3】是否是隐式绑定？如果是，this绑定的是属于的对象

var bar = obj1.foo(); 
　　【4】如果都不是，则使用默认绑定

var bar = foo();


二  new绑定和显式绑定的优先级

假如我们有这样一个函数：

var foo = function (val){
   this.a = val
}
 
var bar = foo.bind(obj)
 
var baz = new bar(2)
 
console.log(baz.a) // 2
在上面的例子中，我们通过显式绑定将foo的this绑定到obj，通过new绑定将this绑定到新建的对象上，从输出结果来看，new绑定的优先级比显式绑定的优先级更高
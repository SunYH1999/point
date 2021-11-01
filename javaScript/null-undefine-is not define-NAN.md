# null———undefine————is not define————NAN

### undefine和is not define的区别

undefined是javascript的一种基本数据类型，变量未赋值或者函数没有返回值时返回。

xxx is not defined是一种错误类型，其完整形式是：Uncaught ReferenceError: xxx is not defined（未捕获的引用错误），对象表明一个不存在的变量被引用，即：当你尝试引用一个未被定义的变量时，将会抛出一个 ReferenceError 。

### null和undefine的区别

null表示"没有对象"，即该处不应该有值

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。


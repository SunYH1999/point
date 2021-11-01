# class与构造函数的区别


[aaa](https://www.jianshu.com/p/5209fd89eef2)



[深度理解](https://www.jianshu.com/p/f05fffc977e2)
[aa](https://www.cnblogs.com/dillonmei/p/12578530.html)



### Class类中不存在变量提升

 // es5
 var bar  = new Bar(); // 可行
 function Bar() {
     this.bar = 42;
 }
 //es6
 const foo = new Foo(); // Uncaught ReferenceError
 class Foo {
     constructor() {
         this.foo = 42;
     }
 }
### Class内部会启用严格模式

 // es5
 function Bar() {
     baz =  23; // ok
 }
 var bar = new Bar();
 // es6
 class Foo {
    constructor() {
       this.foo = 42;
       foo = 12; // Uncaught ReferenceError: foo is not defined
    }
  }
  let foo = new Foo();
### Class内部不能重写类名（修改类名）

// es5
 function Bar() {
   Bar = 'Baz';
   this.bar = 42;
 }
 var bar = new Bar();
 console.log(bar);// Bar {bar: 42}
 console.log(Bar);// 'Baz'
 // es6
 class Foo {
     constructor(){
         this.foo = 42;
         Foo = 'Fol'; // Uncaught TypeError: Assignment to constant variable.
     }
 }
 let foo = new Foo();
 Foo = 'Fol';// it's ok
### Class必须使用new调用

 // es5
 function Bar(){ }
 var bar = Bar();// it's ok;
 // es6
 class Foo {
 }
 let foo = Foo();// Uncaught TypeError: Class constructor Foo cannot be invoked without 'new'
### Class中的所有方法不可枚举

 // es5
 function Bar() {}
 Bar.getName = function() {}
 Bar.prototype.say = function() {}
 console.log(Object.keys(Bar)); // ["getName"]
 console.log(Object.keys(Bar.prototype)); // ["say"]
 // es6
 class Foo {
   constructor(){}
   static answer() {}
   print(){}
 }
 console.log(Object.keys(Foo))// []
 console.log(Object.keys(Foo.prototype));// []

### Class 的继承有两条继承链
一条是：子类的__proto__指向父类；
另一条是：子类的prototype属性的__proto__指向父类的prototype属性
es6子类通过__proto__属性找到父类，而es5子类通过__proto__找到Function.prototype

 // es5
 function Father() {}
 function Child() {}
 Child.prototype = new Father();
 Child.prototype.constructor = Child;
 console.log(Child.__proto__ === Function.prototype); // true
 // es6
 class Father {}
 class Child extends Father {}
 console.log(Child.__proto__ === Father); // true

### es5 与 es6子类this的生成顺序不同
es5继承是先建立子类实例对象this，再调用父类构造函数修饰子类实例；
es6继承是先建立父类实例对象this，再调用子类构造函数修饰this。即在子类构造函数中先调用super()方法，之后再能使用this。

  // es5
  function Father(name, age) {
    this.name = name;
    this.age = age;
  }
  function Child(name, age, sex) {
    Father.call(this, name, age);
    this.sex = sex;
  }
  Object.setPrototypeof(Child.prototype, Father.prototype);
  var son = new Child('小明', 12, '男');
  console.log(son); // {name: '小明', age: 12, sex: '男'}
  // es6
  class Father {
    constructor(name, age) {
       this.name = name;
        this.age = age;
    }
  }
  class Child extends Father {
    constructor(name, age, sex) {
      super(name, age);
      this.sex = sex;
    }
  }
  let son =  new Child('小红', 12, '女');
  console.log(son); // {name: '小红', age: 12, sex: '女'}
正是因为this的生成顺序不同，所有es5不能继承原生的构造函数，而es6可以继承

  // es5
  function MyES5Array() {
      Array.apply(this, arguments);
      // 原生构造函数会忽略apply方法传入的this,即this无法绑定，先生成的子类实例，拿不到原生构造函数的内部属性。
  }
  MyES5Array.prototype = Object.create(Array.prototype, {
      constructor: {
          value: MyES5Array,
          writable: true,
          configurable: true,
          enumerable: true
      }
  })
  var arrayES5 = new MyES5Array();
  arrayES5[0] = 3;
  console.log(arrayES5.length);// 0 
  arrayES5.length = 0;
  console.log(arrayES5[0]);// 3
  // es6
  class arrayES6 extends Array {
      constructor(...args){
          super(...args);
      }
  }
  let arrayes6 = new arrayES6();
  arrayes6[0] = 3;
  console.log(arrayes6.length);// 1
  arrayes6.length = 0;
  console.log(arrayes6[0]);// undefined


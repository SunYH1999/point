# let var const symbol

#### 1.let不存在变量提升
所以会造成***暂时性锁区***,只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响<br>
在块级作用域内，声明变量之前使用都会报错

#### 2.let const 都是块级作用域
if语句和for语句里面的{ }也属于块作用域<br>
而var是函数作用域，可以跨块访问，不能跨函数访问

#### 3.let const不允许重复声明
const一旦声明变量，就必须立即初始化，不能留到以后赋值<br>
let也不能重复声明，但声明的变量可以改变，值和类型都可以改变，没有限制<br>

对于复合类型的变量，如数组和对象，变量名不指向数据，而是指向数据所在的地址。<br>
const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。 


### symbol应用场景

const是定义的变量名不可重复定义， 
symbol是定义的变量值不可重复。

外部不需要访问时；代替常量

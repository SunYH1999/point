[原理](https://blog.csdn.net/qq_38722097/article/details/80717240)

typeof 一般被用于判断一个变量的类型，
我们可以利用 typeof 来判断number, string, object, boolean, function, undefined, symbol 这七种类型，
这种判断能帮助我们搞定一些问题，比如在判断不是 object 类型的数据的时候，typeof能比较清楚的告诉我们具体是哪一类的类型。
但是，很遗憾的一点是，typeof 在判断一个 object的数据的时候只能告诉我们这个数据是 object, 而不能细致的具体到是哪一种 object




一个实例是否是其父类型或者祖先类型的实例
nstanceof 主要的作用就是判断一个实例是否属于某种类型



instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。
因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，
如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。
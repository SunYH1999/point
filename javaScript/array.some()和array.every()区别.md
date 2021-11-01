# array.some()和array.every()区别

### some()

用于检测数组中的元素是否有满足指定条件的，若满足返回true，否则返回false

依次执行数组的每个元素；

如果有一个元素满足条件，则表达式返回true，剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false

注意：

some()不会对空数组进行检测

some()不会改变原始数组

```js
array.some(function(item,index,array){
	//item:当前元素的值；
    //index:当前元素的索引；
    // array:当前元素的数组对象；

})
```

### every()

```js
array.every(function(item,index,array）{
	//item:当前元素的值；
	//index:当前元素的索引；
	// array:当前元素的数组对象；
})
]
```

用于检测数组中所有元素是否都符合指定条件，若符合返回true，否则返回false；

使用指定函数检测数组中的所有元素；

如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回true；

注意：

every()不会对空数组进行检测；

every()不会改变原来的数组

### 例子

```js
let list = [
    {name:"aaa",age:3},
    {name:"bbb",age:4},
    {name:"ccc",age:5},
];
 var eve= list.every(function(item){
   return item.age > 4
})
console.log(eve)//false;
var some = list.some(function(item){
   return item.age > 4
})
console.log(some)//true
```
# 获取dom


1. 方法一：

直接给相应的元素加id,然后再document.getElementById("id");获取，然后设置相应属性或样式；

2. 方法二：

使用ref,给相应的元素加ref=“name” 然后再this.$refs.name获取到该元素，并且可以直接调用子组件中定义的方法；

 

注意：

在获取相应元素之前，必须在mounted生命周期进行挂载，否则获取到的值为空；

如果是给子组件加id并修改自定义属性，则直接会加载该子组件对应的外层div上，并不会改变该子组件原本的自定义属性的值；

如果给子组件加ref，然后获取到该DOM元素之后改变相应的自定义属性的值，vue会报错：

```js
Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed 
```
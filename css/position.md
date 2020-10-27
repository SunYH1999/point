# position

1. static（静态定位）：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

2. relative（相对定位）：生成相对定位的元素，通过top,bottom,left,right的设置相对于其正常（原先本身）位置进行定位。可通过z-index进行层次分级。　　

3. absolute（绝对定位）：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

4. fixed（固定定位）：生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

### 1.absolute

生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

### 2.relative

生成相对定位的元素，相对于其正常位置进行定位。

因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。

### 3.fixed

生成绝对定位的元素，相对于浏览器窗口进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

### 4.static

默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

### 5.inherit

规定应该从父元素继承 position 属性的值。

### 6.absolute与fixed

##### 共同点	

1、都会改变行内元素（inline）的呈现方式，display会被设置为block

2、都会让元素脱离正常流，不占据空间

3、默认都会覆盖在非定位元素之上，也可通过z-index声明调整覆盖顺序

##### 不同点	

1、absolute的根元素是可以设置的；而fixed的根元素固定为当前窗口（应用）

2、（常用）当你滚动时，fixed元素与窗口（应用）之间的距离是不变的

 

### 7.absolute与relative

##### 不同点	

1、absolute参照的是父级元素的左上角；relative参照元素的原始点（比如，"left: 20" 会向元素的 left 位置添加 20 像素）

2、relative的z-index不能定义父子的上下关系，一定是子上父下；absolute多个层可以使用z-index属性改变层重叠顺序
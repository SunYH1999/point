# bfc

[bfc](https://www.jianshu.com/p/0d713b32cd0d)

为了解决父元素高度自动 子元素浮动 父元素高度变为0


BFC

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

触发BFC
只要满足以下任意一条件,将会触发BFC.

body根元素
浮动元素：float：除none以为的值
绝对定位元素：position：absolute/fixed
display：inline-block/table-cells/flex
overflow：除了visible以外的值（hidden/auto/scroll)
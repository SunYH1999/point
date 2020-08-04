# CSS3新特性

### 过渡    

transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)

### 动画    

animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）

### 形状转换   

transform:适用于2D或3D转换的元素

rotate(30deg);   

translate(30px,30px);   

scale(.8);        

skew(10deg,10deg);        

rotateX(180deg);     

rotateY(180deg);        

rotate3d(10,10,10,90deg);

5.选择器

6.阴影    box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）;复制代码

7.边框    border-image: 图片url 图像边界向内偏移 图像边界的宽度(默认为边框的宽度) 用于指定在边框外部绘制偏移的量（默认0） 铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch））;

8.背景  background-clip  制定背景绘制（显示）区域 background-origin    background-size

1.（background-clip: border-box;）默认情况（从边框开始绘制）                                                              2.（background-clip: padding-box;）从padding开始绘制（显示），不算border,，相当于把border那里的背景给裁剪掉！                                                                                                                                             3.（background-clip: content-box;）只在内容区绘制（显示），不算padding和border，相当于把padding和border那里的背景给裁剪掉！

9.反射     -webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图片

10.文字   换行   语法：word-break: normal|break-all|keep-all;、语法：word-wrap: normal|break-word;  超出省略号   text-overflow:clip|ellipsis|string                                                                                                 文字阴影   语法：text-shadow:水平阴影，垂直阴影，模糊的距离，以及阴影的颜色。

11.颜色  rgba（rgb为颜色值，a为透明度） color: rgba(255,00,00,1);background: rgba(00,00,00,.5);  hsla h:色相”，“s：饱和度”，“l：亮度”，“a：透明度”  color: hsla( 112, 72%, 33%, 0.68);background-color: hsla( 49, 65%, 60%, 0.68);复制代码

12.渐变

13.Filter（滤镜）：黑白色filter: grayscale(100%)、褐色filter:sepia(1)、饱和度saturate(2)、色相旋转hue-rotate(90deg)、反色filter:invert(1)、透明度opacity(.5)、亮度brightness(.5)、对比度contrast(2)、模糊blur(3px)

14.弹性布局  Flex

15.栅格布局 grid

16.多列布局

17.盒模型定义   box-sizing:border-box的时候，边框和padding包含在元素的宽高之内！                            box-sizing:content-box的时候，边框和padding不包含在元素的宽高之内！如下图

18.媒体查询 就在监听屏幕尺寸的变化，在不同尺寸的时候显示不同的样式！在做响应式的网站里面，是必不可少的一环！

作者：逆风飘游的鱼
链接：https://www.jianshu.com/p/56b7302d7f7f
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
# MVVM MVC模式

### MVC

View：视图：用户界面--是直接面向最终用户的“视图层”，是能与用户操作交互的界面。

Model：模型：数据保存--是核心的“数据层”，是程序要操作的数据或信息。

Controller:控制器：业务逻辑--负责根据用户从“视图层”输入 的指令，选取“数据层”中的数据，然后对其进行相应操作后，产生最后结果。

用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。

用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。

用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。

###### 优缺点

优点：

耦合性低<br>
重用性高<br>
可维护性高<br>

缺点：

没有明确的定义<br>
不适合小型，中等规模的应用程序<br>
增加系统结构和实现的复杂性<br>
视图与控制器间的过于紧密的连接<br>
视图对模型数据的低效率访问<br>


### MVP


MVP分为 Model（模型）、View（视图）、Presenter（表示器）三部分组成。
MVP模式主要是针对Android的MVC模式的升级版本，MVP与MVC最不同的一点是M与V是不直接关联的也是就Model与View不存在直接关系，这两者之间间隔着的是Presenter层，其负责调控View与Model之间的间接交互。


优点：

降低耦合度
模块职责划分明显
利于测试驱动开发
代码复用
隐藏数据
代码灵活性

缺点：
视图的渲染放在Presenter中，所以视图和Presenter的交互会过于频繁。如果Presenter过多地渲染视图，往往会使得它与特定的视图的联系过于紧密。




### MVVM

Model-View-ViewModel的缩写，Model代表数据模型，View代表UI组件,ViewModel将Model和View关联起来

数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据

通过事件监听实现视图改变数据

通过数据的双向绑定实现数据改变视图

###### 优缺点

优点：

双向绑定时，当Model变化时，View-Model会自动更新，View也会自动变化。<br>
View的功能进一步的强化，具有控制的部分功能。<br>
控制器的功能大部分移动到View上处理，大大的对控制器进行了瘦身。<br>

缺点：

数据绑定使得 Bug 很难被调试。<br>
数据双向绑定不利于代码重用。<br>
大的模块，model很大，不利于内存的释放。<br>





[深入理解](https://blog.csdn.net/xx326664162/article/details/50478335)
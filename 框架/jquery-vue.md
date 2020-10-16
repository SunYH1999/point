# 区别优势

### vue 


jQuery到Vue的转变

jQuery到Vue的转变是一个思想的转变，将原有的直接操作dom的思想转变到操作数据上
jQuery是使用选择器$选取DOM对象，对其进行赋值，取值，事件绑定等，而Vue则是通过Vue对象ViewModel将数据和View完全分离开了。对数据操作不再需要引用相应的DOM对象，即数据和View是分离的，通过Vue对象vm实现相互的绑定
Vue支持双向数据绑定：在MVVM 框架中，View(视图) 和 Model(数据) 是不可以直接通讯的，在它们之间存在着 ViewModel 这个中间介充当着观察者的角色。当用户操作View(视图)，ViewModel 感知到变化，然后通知 Model发生相应改变；反之当 Model(数据) 发生改变，ViewModel 也能感知到变化，使 View 作出相应更新。
Vue支持组件化：组件化的优点 《1》提高开发效率 《2》方便重复使用 《3》简化调试步骤 《4》提升整个项目的可维护性 《5》便于协同开发
jQuery优势的案例

向一个列表添加一个元素：vue只需要向列表数据对象message里面push一条li标签即可，而jQuery则需要首先获取列表对象，再添加标签
控制按钮的显示隐藏：Vue只需控制属性isShow的值为ture或者false即可，而jquery需要操作dom节点
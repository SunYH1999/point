# hash和history

### hash 模式

\#后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面
通过监听 hashchange 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。

### history模式

history模式的实现，主要是 HTML5 标准发布的两个 API，pushState 和replaceState，
这两个 API 可以在改变 url，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作


### 区别

url 展示上，hash 模式有“#”，history 模式没有
刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由
兼容性，hash 可以支持低版本浏览器和 IE。
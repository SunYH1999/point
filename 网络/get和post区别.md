# get和post的区别

1. Get是不安全的，因为在传输过程，数据被放在请求的URL中；Post的所有操作对用户来说都是不可见的。
   2. Get传送的数据量较小，这主要是因为受URL长度限制；Post传送的数据量较大，一般被默认为不受限制。
   3. Get限制Form表单的数据集的值必须为ASCII字符；而Post支持整个ISO10646字符集。
   4. Get执行效率却比Post方法好。Get是form提交的默认方法。 收起  






[深入理解](https://www.zhihu.com/question/28586791)
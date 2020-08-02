# display
none	此元素不会被显示。<br>
block	此元素将显示为块级元素，此元素前后会带有换行符。<br>
inline	默认。此元素会被显示为内联元素，元素前后没有换行符。<br>
inline-block	行内块元素。（CSS2.1 新增的值）<br>
list-item	此元素会作为列表显示。<br>
run-in	此元素会根据上下文作为块级元素或内联元素显示。<br>
compact	CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。<br>
marker	CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。<br>
table	此元素会作为块级表格来显示（类似\<table\>），表格前后带有换行符。<br>
inline-table	此元素会作为内联表格来显示（类似 \<table\>），表格前后没有换行符。<br>
table-row-group	此元素会作为一个或多个行的分组来显示（类似 \<tbody\>）。<br>
table-header-group	此元素会作为一个或多个行的分组来显示（类似 \<thead\>）。<br>
table-footer-group	此元素会作为一个或多个行的分组来显示（类似 \<tfoot\>）。<br>
table-row	此元素会作为一个表格行显示（类似 \<tr\>）。<br>
table-column-group	此元素会作为一个或多个列的分组来显示（类似 \<colgroup\>）。<br>
table-column	此元素会作为一个单元格列显示（类似 \<col\>）<br>
table-cell	此元素会作为一个表格单元格显示（类似 \<td\> 和 \<th\>）<br>
table-caption	此元素会作为一个表格标题显示（类似 \<caption\>）<br>
inherit	规定应该从父元素继承 display 属性的值。






块级元素：不设置宽度时宽度为父元素的宽度，独占一行，支持宽高。

内联元素：内容撑开宽度，不会独占一行，不支持宽高，代码换行会被解析成空格。

行内块元素：结合行内和块级元素的优点，不仅可以设置宽高，还可以多个标签存在一行


块级： p、div、ul、ol、li、dl、dt、dd、h1~h6、form、table

内联： a、span、em、strong、b、i、u、label、br

行内块元素： img、input、textarea
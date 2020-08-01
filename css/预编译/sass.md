# SCSS

#### 1.可嵌套

#### 2.变量：变量以$开头

#### 3.计算

#### 4.三元运算
```css
	* {
		margin: 0;
		padding: 0;
	}	
	$buer: false;
	/*当$buer为真时 使用red 否则使用black*/
	.box {
		background-color: if($buer, red, black);
	}
	
	/*编译结果*/
	* {
	  margin: 0;
	  padding: 0; 
	 }	
	.box {
	  background-color: black; 
	}
```

#### 5.混合
```css
	/*定义混合*/
	@mixin hunhe {
		border: 1px solid red;4	
	}
	
	.box {
		@include hunhe;
	}
```

#### 6.方法
```css
	/*定义方法*/
	@mixin fangfa($w, $h) {
		width: $w;
		height: $h;
		background-color: red;
	}
	/*方法的使用:@include 方法名(实参1， 实参2);*/
	.box {
		@include fangfa(200px, 200px);
	}

```

#### 7.继承

```css
	.box {
		width: 200px;
		height: 200px;
		background-color: red;
		.box1 {
			width: 100px;
			height: 100px;
			background-color: orange;
		}
	}
	
	/*想要在.hezi中使用.box的内容 需要通过继承语法来使用*/
	.hezi {
		@extend .box; 
		/* ↑ 等价于 ↓*/
		width: 200px;
		height: 200px;
		background-color: red;
		.box1 {
			width: 100px;
			height: 100px;
			background-color: orange;
		}	
	}
```

#### 8.插值语法
```css
	$name: foo;
	$attr: border;
	p.#{$name} {
		#{$attr}-color: blur;
	}
	/*被编译为*/
	p.foo {
		border-color: blur;
	}
```

#### 9.if语句
```css
	@mixin method($w, $h) {
		width: $w;
		height: $h;
		/*判断 如果$w超过100px 就让背景色是红色*/
		@if $w > 100px {
			background-color: red;
		} @else {
			background-color: green;
		}
	}
	
	.box {
		@include method(100px, 200px);
	}
```

#### 10.for语句

#### 11.while语句

#### 12.each语句



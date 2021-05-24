# 文件系统模块fs

## 导入

```js
var fs = require("fs")
```

## 异步读取与同步读取

```js
// 异步读取
fs.readFile('a.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
});
// 同步读取
var data = fs.readFileSync('a.txt');
```

## 打开文件

```js
fs.open(path, flags[, mode], callback)
```

## 写入文件

```js
fs.writeFile(file, data[, options], callback)
```

## 读取文件

```js
fs.read(fd, buffer, offset, length, position, callback)
```

## 关闭文件

```js
fs.close(fd, callback)
```

## 删除文件

```js
fs.unlink(path, callback)
```


[a](https://www.runoob.com/nodejs/nodejs-fs.html)
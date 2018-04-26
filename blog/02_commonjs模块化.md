## Node.js模块化教程
1. 下载安装nodejs
2. 创建项目结构

```
|-modules
  |-module1.js
  |-module2.js
  |-module2.js
|-app.js
|-package.json
{
    "name":"commonjs-node",
    "version": "1.0.0"
}
```

3. 下载第三方模块
* npm install -g uniq

* npm install uniq --save-dev

4. 模块化编码
* module1.js
```
module.exports = {

}
```

* module2.js

```
module.exports = function () {
    console.log("module2");
}
```

* module3.js

```
exports.foo= function () {
  console.log('module3');
};

exports.boo= function () {
  console.log('module3');
};
```

4. CommonJs的模块规范

一个文件就是一个模块，拥有单独的作用域。普通方式定义的变量、函数、对象都属于该模块内。


* 通过 require 来加载模块。
* 通过 exports 和 modul.exports 来暴露模块中的内容。


5. 原始的commonjs规范些的js代码，在浏览器中不能识别，需要打包装换


* browserify 打包


spm install module-name -save 自动把模块和版本号添加到dependencies部分
spm install module-name -save-dve 自动把模块和版本号添加到devdependencies部分

```
npm install browserify -g   #全局安装
npm install browserify --save-dev    # 当前项目安装
```

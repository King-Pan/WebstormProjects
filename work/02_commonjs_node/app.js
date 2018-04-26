//将其他模块汇聚到主模块

let uniq = require('uniq');

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3= require('./modules/module3');

module1.foo();
module2();

module3.foo();
module3.boo();
console.log(module3.arr);
console.log(uniq(module3.arr));
console.log(module3.arr);



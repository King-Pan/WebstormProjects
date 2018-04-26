//定义没有依赖的模块
define(function () {
   let name = "dataService-requirejs";
   function getName() {
       return name;
   }

   //暴露模块
    return {getName};
});

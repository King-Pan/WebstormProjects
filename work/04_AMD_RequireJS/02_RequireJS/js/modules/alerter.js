//定义有依赖的模块

//amd中使用jquery模块名必须小写

define(['dataService','jquery'], function (dataService,$) {
    let msg = "alerter.js";
    function showMsg() {
        console.log(msg,dataService.getName());
    }

    $('body').css('background','red');
    //暴露模块
    return {showMsg};
});

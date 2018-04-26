//定义一个没有依赖模块
(function (window) {
    let name = "dataService.js";
    function getName() {
        return name;
    }
    window.dataService = {getName};
})(window);

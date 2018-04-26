(function () {

    requirejs.config({
        baseUrl: './js/modules',  //基础路径,从根目录开始找
        paths: { //配置路径
            dataService: 'dataService',    //配置模块名与文件的映射关系，默认会加一个后缀.js,如果不
            alerter: 'alerter',
            jquery: '../libs/jquery.min'
        }
    });
    requirejs(['alerter'],function (alerter) {
        alerter.showMsg();
    });
})();

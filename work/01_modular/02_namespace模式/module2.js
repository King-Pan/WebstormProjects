let obj = {
    msg: 'module2',
    foo(){
        console.log("foo()",this.msg);
    },
    boo(){
        console.log('boo()',this.msg);
    }
};

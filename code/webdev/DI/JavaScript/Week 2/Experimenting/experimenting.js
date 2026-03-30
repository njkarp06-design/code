class classname {
    constructor(parm1, parm2) {
        this.prop1 = parm1;
        this.prop2 = parm2;
    }
    method1() {
        // code for method1
    }
}
class subclassname extends classname {
    constructor(parm1, parm2, parm3) {
        super(parm1, parm2);
        this.prop3 = parm3;
    }
    method3() {
        // code for method3
    }
}
const instance1 = new classname('value1', 'value2');
const instance2 = new subclassname('value1', 'value2', 'value3');
instance1.method1();
instance2.method1();
instance2.method3();    


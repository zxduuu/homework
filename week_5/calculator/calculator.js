
//加减乘除的四个函数
function mul(x, y) {
    return x * y;
}
function divi(x, y) {
    return x / y;
}
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}

//通过识别运算符分别对应不同的计算方法
function cal(x, y, op) {
    switch (op) {
        case '*':
            return mul(x, y);
        case '/':
            return divi(x, y);
        case '+':
            return add(x, y);
        case '-':
            return sub(x, y);
        default:
            return '请输入正确的操作符';
    }
}
// 一个4*5的例子
   alert(cal(4,5,"*"));
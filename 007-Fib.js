var fib = function(num) { //第一行为1
    var a = 1;
    var b = 1;
    var temp;
    if (num === 1) return 1;
    for (var i = 2; i <= num; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return temp;

};
console.log(fib(8));

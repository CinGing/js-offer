var frog = function(number) {
    var a = 1;
    var b = 2;
    var temp;
    for (var i = 3; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp

};
console.log(frog(6));

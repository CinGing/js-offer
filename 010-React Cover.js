function rectCover(number){
    var a = 1, b = 2, temp;
    if(number <= 0){
        return 0;
    }
    if(number === 1){
        return 1;
    }
    if(number === 2){
        return 2
    }
    for(var i = 3; i <= number; i++){
      temp = a + b;
      a = b;
      b = temp;
    }
    return temp;
}
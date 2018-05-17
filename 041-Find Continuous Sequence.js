function FindContinuousSequence(sum){
    if(sum < 3){
        return [];
    }
    var small = 1, big = 2;
    var mid = (1 + sum) / 2;
    var curr = small + big;
    var result = [];
    while(small < mid){
        if(curr === sum){
            pushSeq(small, big);
        }
        while(curr > sum && small < mid){
            curr -= small;
            small++;
            if(curr === sum){
                pushSeq(small, big);
            }
        }
        big++;
        curr += big;
    }
    result.sort(function(a,b){return a[0] - b[0];});
    return result;
    function pushSeq(small, big){
        var temp = [];
        for(var i = small; i <= big; i++){
            temp.push(i);
        }
        result.push(temp);
    }
}
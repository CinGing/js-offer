function GetLeastNumbers_Solution(input, k){
    if(!input || input.length < k){
        return [];
    }
    return input.sort(function(a,b){
        return a - b
    }).slice(0, k);
}
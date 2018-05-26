function GetNumberOfK(data, k){
    return data.reduce(function(count, a){
        return a === k ? count+1 :count;
    }, 0);
}
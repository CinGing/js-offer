function printMatrix(matrix){
    if(!matrix || !matrix.length) return null;
    var result = [];
    var rows = matrix.length, cols = matrix[0].length;
    var len = rows * cols;
    var i = 0, j = 0;
    var circle = 0;
    while(1){
        while(j < cols - circle){
            result.push(matrix[i][j]);
            j++;
        }
        if(result.length === len) break;
        j--, i++;
        while(i < rows - circle){
            result.push(matrix[i][j])
            i++;
        }
        if(result.length === len) break;
        i--, j--;
        while(j >= circle){
            result.push(matrix[i][j]);
            j--;
        }
        if(result.length === len) break;
        j++, i--;
        circle++;
        while(i >= circle){
            result.push(matrix[i][j])
            i--;
        }
        if(result.length === len) break;
        j++, i++;
    }
    return result;
}
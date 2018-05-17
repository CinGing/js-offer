var twoArray = function(nums, target) {
    var rowCount = nums.length;
    var i = rowCount - 1;
    var j = 0;
    for (i, j; j >= 0 && j < nums[i].length;) {
        if (target === nums[i][j]) {
            return true;
        }
        if (target > nums[i][j]) {
            j++;
            continue
        }
        if (target < nums[i][j]) {
            i--;
            continue
        }
    }
    return false;
};
var test = [
    [1, 2, 3, 4],
    [4, 4, 6, 7],
    [7, 9, 10, 11],
    [9, 9, 12, 13]
];
console.log(twoArray(test, 6));

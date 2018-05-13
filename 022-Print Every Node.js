/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root){
    if (!root) {
        return [];
    }
    var queue = [];
    queue.push(root);
    var result = [];
    while (queue.length) {
        var temp = queue.shift();
        result.push(temp.val);
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
    }
    return result;
}
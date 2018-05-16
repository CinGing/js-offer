function IsBalanced_Solution(pRoot){
    if(!pRoot){
        return true;
    }
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    var diff = left - right;
    if(diff > 1 || diff < -1)
        return false;
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
    function TreeDepth(pRoot){
        if(!pRoot){
            return 0;
        }
        var depth = 0;
        var currDepth = 0;
        dfs(pRoot);
        return depth;
        function dfs(node){
            if(!node){
                depth = depth > currDepth ? depth : currDepth;
                return;
            }
            currDepth++;
            dfs(node.left);
            dfs(node.right);
            currDepth--;
        }
    }
}
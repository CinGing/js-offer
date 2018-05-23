function Print(pRoot) {
    var res = [];
    if(!pRoot){
        return res;
    }
    var que = [];
    que.push(pRoot);
    while(que.length > 0){
        var vec = [];
        var len = que.length;
        for(var i = 0; i < len; i++){
            var tmp = que.shift(); //front
            vec.push(tmp.val);
            if(tmp.left)
                que.push(tmp.left);
            if(tmp.right)
                que.push(tmp.right);
        }
        res.push(vec);
    }
    return res;
}
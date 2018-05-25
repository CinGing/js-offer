function Serialize(pNode) {
    var str = [];
    ser(pNode);
    for(var i = str.length - 1; i >= 0; i--){
      if(str[i] !== '#'){
        break;
      }
      str.pop();
    }
    return str.join();
    function ser(node){
        if(!node){
            str.push('#');
            return;
        }
        str.push(node.val);
        ser(node.left);
        ser(node.right);
    }
}
function Deserialize(str) {
    var index = -1;
    var len = str.length;
    if(index >= len){
        return null;
    }
    var arr = str.split(",");
    var head = des();
    return head;
    function des(node){
        index++;
        if(arr[index] && arr[index] !== '#'){
            var temp = new TreeNode(arr[index]);
            node = temp;
            node.left = des();
            node.right = des();
        }
        return node;
    }
}
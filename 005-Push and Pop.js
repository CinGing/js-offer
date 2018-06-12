var stack1 = [];
var stack2 = [];
function push(node){
    stack1.push(node);
}
function pop(){
    var temp = stack1.pop();
    while(temp){
        stack2.push(temp);
        temp = stack1.pop();
    }
    var result = stack2.pop();
    temp = stack2.pop();
    while(temp){
        stack1.push(temp);
        temp = stack2.pop();
    }
    return result;
}
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead){
    if(!pHead){
        return null;
    }
    var meeting = meetingNode(pHead);
    if(!meeting){
        return null;
    }
    var nodeLoop = 1;
    var node1 = meeting;
    while(node1.next != meeting){
        node1 = node1.next;
        nodeLoop++;
    }
    node1 = pHead;
    for(var i = 0; i < nodeLoop; i++){
        node1 = node1.next;
    }
    var node2 = pHead;
    while(node1 != node2){
        node1 = node1.next;
        node2 = node2.next;
    }
    return node1;
    function meetingNode(node){
        if(!node || !node.next){
            return null;
        }
        var slow = node.next;
        var fast = slow.next;
        while(fast && slow){
            if(fast === slow){
                return fast;
            }
            slow = slow.next;
            fast = fast.next;
            if(fast){
                fast = fast.next;
            }
        }
        return null;
    }
}
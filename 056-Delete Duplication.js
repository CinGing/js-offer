function deleteDuplication(pHead){
    if(!pHead){
        return null;
    }
    var tempHead = new ListNode(-1);
    tempHead.next = pHead;
    var preNode = tempHead;
    var curr1 = preNode.next;
    var curr2 = curr1.next;
    while(curr1){
        if(!curr2 || curr2.val !== curr1.val){
            if(curr1.next !== curr2){
                clear(curr1, curr2);
                preNode.next = curr2;
            } else {
              preNode = curr1;
            }
            curr1 = curr2;
            if(curr2){
              curr2 = curr2.next;
            }
        } else {
          if(curr2){
            curr2 = curr2.next;
          }
        }
    }
    return tempHead.next;
    function clear(node, stop){
        var temp;
        while(node !== stop){
            temp = node.next;
            node.next = null;
            node = temp;
        }
    }
}
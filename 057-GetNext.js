function GetNext(pNode){
    if (!pNode){
        return pNode;
    }
    if (pNode.right){
        pNode = pNode.right;
        while (pNode.left) {
            pNode = pNode.left;
        }
        return pNode;
    } else if(pNode.next && pNode.next.left == pNode){
        return pNode.next;
    } else if(pNode.next && pNode.next.right == pNode){
        while(pNode.next && pNode.next.left != pNode){
            pNode = pNode.next ;
        }
        return pNode.next;
    } else {
        return pNode.next;
    }
}
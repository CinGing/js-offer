function FindKthToTail(head, k){
    if(!head || k <= 0){
        return null;
    }
    var i = head, j = head;
    while(--k){
        j = j.next;
        if(!j){
            return null;
        }
    }
    while(j.next){
        i = i.next;
        j = j.next;
    }
    j = null;
    return i;
}
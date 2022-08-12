/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  
   while(p1 && p2 && p2.next){
    p1 = p1.next
    p2 = p2.next.next
    if(p1 === p2){
        return true
    }
   }
   return false
};


/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  const map = new Map()
 
  while(head){
      if(map.has(head)) return true
      map.set(head,head)
      head = head.next

   
  }
  return false
};

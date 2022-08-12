/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let p1 = head
  while(head){
      if(head.next && head.val === head.next.val){
          head.next = head.next.next
      }else{
          head = head.next
      }
  }
  return p1
};

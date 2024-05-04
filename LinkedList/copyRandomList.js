/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const hashMap = new Map();

  let curr = head;
  while (curr) {
    const copy = new Node(curr.val);
    hashMap.set(curr, copy);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const copy = hashMap.get(curr);
    copy.next = hashMap.get(curr.next) || null;
    copy.random = hashMap.get(curr.random) || null;
    curr = curr.next;
  }

  return hashMap.get(head);
};

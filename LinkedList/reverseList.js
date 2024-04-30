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

var reverseList = function (head) {
  if (!head) return head;

  let first = head;
  let second = head.next;

  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }

  head.next = null;
  head = first;

  return head;
};

// class NewNode {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(val) {
//     this.head = {
//       value: val,
//       next: null,
//     };
//     this.length = 1;
//     this.tail = this.head;
//   }

//   append(val) {
//     const node = new NewNode(val);
//     this.tail.next = node;
//     this.tail = node;
//     this.length += 1;
//   }

//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;
//     while (second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }

//     this.head.next = null;
//     console.log(this.head);
//     console.log(first);
//     this.head = first;
//     console.log(this.head);
//   }
// }

// const list = new LinkedList(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.reverse();
// const head = [1, 2, 3, 4, 5];

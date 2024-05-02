/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// class NewNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(val) {
//     this.head = {
//       val: val,
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
// }

const reorderList = function (head) {
  let slowPointer = head;
  let fastPointer = head.next;

  //   find the second half of the slit using fast and slow pointer
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let second = slowPointer.next;
  slowPointer.next = null;

  // reverse the second half of the list
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //   merge first half of list with second half
  let list1 = head;
  let list2 = prev;
  while (list2) {
    const temp1 = list1.next;
    const temp2 = list2.next;
    list1.next = list2;
    list2.next = temp1;
    list1 = temp1;
    list2 = temp2;
  }
};

// const list = new LinkedList(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

console.log(reorderList(list.head));

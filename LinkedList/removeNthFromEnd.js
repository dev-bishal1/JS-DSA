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
// }

// const list = new LinkedList(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(5);

var removeNthFromEnd = function (head, n) {
  let first = head;

  let second = first;
  let count = 0;
  while (second) {
    count += 1;
    second = second.next;
  }

  let position = 1;
  let third = first;
  const diff = count - n;
  while (third) {
    const temp = third.next;
    if (diff === 0) {
      first = temp;
      break;
    }
    if (position === diff) {
      third.next = temp.next;
      break;
    }
    third = temp;
    position += 1;
  }

  return first;
};

// console.log(removeNthFromEnd(list.head, 2));

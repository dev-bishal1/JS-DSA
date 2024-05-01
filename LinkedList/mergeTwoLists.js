const mergeTwoLists = function (list1, list2) {
  let result = new ListNode();

  let cur = result;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;

  return result.next;
};

let list1 = [1, 2, 4],
  list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));

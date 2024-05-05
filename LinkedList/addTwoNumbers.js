const addTwoNumbers = function (l1, l2) {
  let newlist = new ListNode(0);
  let newListUpdater = newlist;

  let carryOver = 0;
  let list1 = l1;
  let list2 = l2;

  while (list1 || list2 || carryOver) {
    let l1Val = 0;
    let l2Val = 0;
    if (list1) {
      l1Val = list1.val;
      list1 = list1.next;
    }

    if (list2) {
      l2Val = list2.val;
      list2 = list2.next;
    }

    const sum = l1Val + l2Val + carryOver;
    const result = sum % 10; // Get the last digit

    const node = new ListNode(result);
    newListUpdater.next = node;
    newListUpdater = node;
    carryOver = Math.floor(sum / 10); // Get the carry-over
  }

  return newlist.next;
};

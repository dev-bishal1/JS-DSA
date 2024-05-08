const hasCycle = function (head) {
  let curr = head;
  const hashMap = new Map();

  while (curr) {
    const exist = hashMap.get(curr);
    if (exist) {
      return true;
    }
    hashMap.set(curr, curr.next);
    curr = curr.next;
  }

  return false;
};

// More optimize solution using fast and slow pointer

const hasCycle2 = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

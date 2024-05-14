// using hashMap only
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hash = new Map();
  }

  get(key) {
    if (this.hash.has(key)) {
      const val = this.hash.get(key);
      this.hash.delete(key);
      this.hash.set(key, val);
      return val;
    }
    return -1;
  }

  put(key, val) {
    if (this.hash.size >= this.capacity && !this.hash.has(key)) {
      const leastUsed = this.hash.keys().next().value;
      this.hash.delete(leastUsed);
    }

    if (this.hash.has(key)) {
      this.hash.delete(key);
    }

    this.hash.set(key, val);
  }
}

// using linked list and hashMap
class NewNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCacheLinkedList {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.left = new NewNode(0, 0);
    this.right = new NewNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  insert(node) {
    const prev = this.right.prev;
    const next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  get(key) {
    if (this.hashMap.has(key)) {
      const node = this.hashMap.get(key);
      this.remove(node);
      this.insert(node);

      return node.val;
    }

    return -1;
  }

  put(key, val) {
    if (this.hashMap.has(key)) {
      this.remove(this.hashMap.get(key));
    }

    const node = new NewNode(key, val);
    this.hashMap.set(key, node);
    this.insert(this.hashMap.get(key));

    if (this.hashMap.size > this.capacity) {
      const leastUsed = this.left.next;
      this.remove(leastUsed);
      this.hashMap.delete(leastUsed.key);
    }
  }
}

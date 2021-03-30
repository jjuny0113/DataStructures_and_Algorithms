class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append = (element) => {
    let node = new Node(element);
    let current = node;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return node;
  };
  insert = (position, element) => {};
  removeAt = (position) => {};
  remove = (element) => {};
  indexOf = (element) => {};
  isEmpty = () => {};
  size = () => {};
  toString = () => {};
  print = () => {};
}

const node = new LinkedList();
node.append(2);
node.append(3);
node.append(1);

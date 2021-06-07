class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("잘못입력하셨습니다.");
    } else {
      const node = new Node(element);
      let curr, prev;

      if (index === 0) {
        node.next = this.head;
        this.haed = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
    }
    this.size++;
  }

  removeidx(index) {
    if (index < 0 || index >= this.size) {
      return console.log("잘못입력했습니다.");
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.value;
    }
  }

  removeValue(value) {
    let curr = this.head;
    let prev = null;
    while (curr !== null) {
      if (curr.value === value) {
        if (prev === null) {
          this.head === curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.value;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  indexOf(value) {
    let count = 0;
    let curr = this.head;

    while (curr !== null) {
      if ((curr.value = value)) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    console.log(this.size);
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  reverseList() {
    let current = this.head;
    let previous = null;

    while (current) {
      let tmp = current.next;
      current.next = previous;
      previous = current;
      current = tmp;
    }
    return previous;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.reverseList());

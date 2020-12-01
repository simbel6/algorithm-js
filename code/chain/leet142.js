/**
 * 141. 环形链表
 */

// 节点
function Node(val) {
  this.val = val;
  this.next = null;
}

// 数组生成链表
function NodeList(arr) {
  this.head = new Node(arr.shift());
  this.next = this.head;
  arr.forEach((item) => {
    this.next.next = new Node(item);
    this.next = this.next.next;
  });
  return this.head;
}

// 1. 节点标记法
const hasCycle1 = function (head) {
  if (!head || !head.next) {
    return false;
  }
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
};

// 2 HashMap法
const hasCycle2 = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, true);
    head = head.next;
  }
  return false;
};

// 3 快慢指针法
const hasCycle3 = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

const arr = [3, 2, 0, -4];
let head = new NodeList(arr);
head.next.next.next.next = head.next;
console.log(hasCycle1(head));
console.log(hasCycle2(head));
console.log(hasCycle3(head));

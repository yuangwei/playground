class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

let node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

let pointer = node

while (pointer?.next) {
  pointer.val = 888
  pointer = pointer.next
}
console.log(node)
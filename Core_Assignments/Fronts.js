class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
//Add Front
//Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }




//Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null

    // removeFront() {
    //     if (this.head == null) {
    //         return this.head;
    //     }
    //     var removedNode = this.head;
    //     this.head = removedNode.next;
    //     removedNode.next = null;
    //     return this.head;
    // }

//Front
//Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.


    front() {
        return this.head == null ? null : this.head.value;
    }
}
var mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(5);
console.log(mySLL.front());
mySLL.addFront(10);
mySLL.addFront(3);

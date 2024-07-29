class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (this.head === null) {
            return null;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        let list = [];
        while (current !== null) {
            list.push(current.value);
            current = current.next;
        }
        console.log(list.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();  // Output: 1 -> 2 -> 3
list.remove();
list.display();  // Output: 1 -> 2


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());  // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.peek());  // Output: 2


function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (stack.peek() !== null) {
        reversed += stack.pop();
    }
    return reversed;
}

// Example usage:
console.log(reverseString('hello'));  // Output: 'olleh'

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (stack.peek() !== null) {
        reversed += stack.pop();
    }
    return reversed;
}

// Example usage:
console.log(reverseString('hello'));  // Output: 'olleh'


class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Added job: ${job}`);
    }

    processJob() {
        const job = this.queue.dequeue();
        if (job === null) {
            console.log('No jobs in the queue.');
        } else {
            console.log(`Processing job: ${job}`);
        }
    }

    viewNextJob() {
        const job = this.queue.front();
        if (job === null) {
            console.log('No jobs in the queue.');
        } else {
            console.log(`Next job: ${job}`);
        }
    }
}

// Example usage:
const printerQueue = new PrinterQueue();
printerQueue.addJob('Print document 1');
printerQueue.addJob('Print document 2');
printerQueue.viewNextJob();  // Output: Next job: Print document 1
printerQueue.processJob();   // Output: Processing job: Print document 1
printerQueue.viewNextJob();  // Output: Next job: Print document 2

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    display() {
        this.inOrderTraversal(this.root, value => console.log(value));
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.display();  // Output: 1, 3, 4, 5, 7

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        const visited = new Set();
        const queue = [startingNode];
        visited.add(startingNode);

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node);

            const neighbors = this.adjacencyList.get(node);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.bfs('A');  // Output: A, B, C

class GraphWithBFS extends Graph {
    findShortestPath(start, end) {
        const visited = new Set();
        const queue = [[start]];

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            if (!visited.has(node)) {
                visited.add(node);
                const neighbors = this.adjacencyList.get(node);

                for (const neighbor of neighbors) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }
        return null;
    }
}

// Example usage:
const graphWithBFS = new GraphWithBFS();
graphWithBFS.addVertex('A');
graphWithBFS.addVertex('B');
graphWithBFS.addVertex('C');
graphWithBFS.addVertex('D');
graphWithBFS.addEdge('A', 'B');
graphWithBFS.addEdge('A', 'C');
graphWithBFS.addEdge('B', 'D');
graphWithBFS.addEdge('C', 'D');
console.log(graphWithBFS.findShortestPath('A', 'D'));  // Output: [ 'A', 'B', 'D' ]

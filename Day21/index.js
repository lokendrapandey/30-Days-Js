// Task 1: Two Sum
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log("Task 1: Two Sum");
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Task 2: Reverse Integer
function reverseInteger(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return (reversed >= -(2 ** 31) && reversed <= 2 ** 31 - 1) ? reversed : 0;
}

console.log("\nTask 2: Reverse Integer");
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21

// Task 3: Palindrome Number
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

console.log("\nTask 3: Palindrome Number");
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Task 4: Merge Two Sorted Lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) current.next = l1;
    if (l2 !== null) current.next = l2;
    
    return dummy.next;
}

function printList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

console.log("\nTask 4: Merge Two Sorted Lists");
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Task 5: Valid Parentheses
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (const char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log("\nTask 5: Valid Parentheses");
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

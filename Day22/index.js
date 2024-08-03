// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Function to print linked list
function printList(node) {
    let current = node;
    let output = [];
    while (current !== null) {
        output.push(current.val);
        current = current.next;
    }
    console.log(output.join(" -> "));
}

// Test cases for Task 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printList(result);  // Output: 7 -> 0 -> 8

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let ans = 0, i = 0, j = 0;

    while (i < n && j < n) {
        if (!set.has(s.charAt(j))) {
            set.add(s.charAt(j++));
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s.charAt(i++));
        }
    }
    return ans;
}

// Test cases for Task 2
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3

function maxArea(height) {
    let maxarea = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        let width = r - l;
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * width);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxarea;
}

// Test cases for Task 3
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) lo++;
                else hi--;
            }
        }
    }
    return res;
}

// Test cases for Task 4
console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1, -1, 2], [-1, 0, 1]]

function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    return Array.from(map.values());
}

// Test cases for Task 5
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

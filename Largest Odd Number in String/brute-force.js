// leetcode 1903
function largestOddNumber(num) {
    if (num[num.length - 1] % 2 !== 0) {
        return num
    }
    let res = ""
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            for (let k = 0; k <= i; k++) {
                res += num[k]
            }
            break;
        }
    }
    return res;
};

let num = "925346"
console.log(largestOddNumber(num))

// TC=O(n*n)
// SC=O(n)
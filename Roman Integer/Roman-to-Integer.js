// Leetcode 13
function Roman(s) {
    function number(n) {
        if (n == "I") {
            return 1
        }
        else if (n == "V") {
            return 5
        }
        else if (n == "X") {
            return 10
        }
        else if (n == "L") {
            return 50
        }
        else if (n == "C") {
            return 100
        }
        else if (n == "D") {
            return 500
        }
        else if (n == "M") {
            return 1000
        }
    }
    let res = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (number(s[i]) < number(s[i + 1])) {
            res -= number(s[i]);
        }
        else {
            res += number(s[i]);
        }
    }
    res += number(s[s.length - 1])
    return res;
}
let s = "IV"
console.log(Roman(s));

// TC=O(n)
// sc=O(1)
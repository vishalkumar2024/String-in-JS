// Leetcode 242
function areAnagrams(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    let map = new Map();  // SC=O(n)
    for (let i = 0; i < s1.length; i++) {  //TC=O(n)
        if (map.has(s1[i])) {
            map.set(s1[i], map.get(s1[i]) + 1);
        } else {
            map.set(s1[i], 1);
        }
    }

    let res = true;
    for (let i = 0; i < s2.length; i++) { // TC=O(n)
        if (map.has(s2[i])) {
            if (map.get(s2[i]) === 1) {
                map.delete(s2[i]);
            }
            else {
                map.set(s2[i], map.get(s2[i]) - 1);
            }
            res = true;
        }
        else {
            return false;
        }
    }
    return res;
}
let s1 = "aab";
let s2 = "abb";
console.log(areAnagrams(s1, s2));

// TC=O(n)
// SC=O(n)
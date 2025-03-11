// // Leetcode 242
function areAnagrams(s1, s2) {
    let n = s1.length;
    let str1 = s1.split(""); //TC=O(n) //SC=O(n)
    str1.sort();  // TC=O(nlogn)
    console.log(str1)

    let str2 = s2.split("");  //TC=O(n) //SC=O(n)
    str2.sort();  // TC=O(nlogn)
    console.log(str2)

    for (let i = 0; i < n; i++) {  //TC=O(n)
        if (str1[i] != str2[i]) {
            return false;
        }
    }
    return true;
}
let s1 = "ba", s2 = "ab"
console.log(areAnagrams(s1, s2));

// // TC=O(nlogn) - O(n)+O(nlogn)+O(n)+O(nlogn)+O(n)
// // SC=O(n)    - O(n)+O(n)

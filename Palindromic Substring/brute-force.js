// This fucntion returns count all palindromic sub-strings present in the string.
//  The length of the palindromic sub-string must be greater than or equal to 2.

function palindromicSubstring(s) {
    let n = s.length;
    function isPalindrome(str) {
        let i = 0;
        let j = str.length - 1;
        while (i <= j) {    // TC=O(n/2)
            if (str[i] != str[j]) {
                return false
            }
            i++;
            j--;
        }
        return true;
    }
    let count = 0;
    for (let i = 0; i < n; i++) {   //
        let res = "";   //SC=O(n)
        for (let j = i; j < n; j++) {  //TC=O(n(n+1)/2) ~ O(n*n)
            res += s[j];
            if (isPalindrome(res)) {
                if (res.length > 1) {
                    count++;
                }
            }
        }
    }
    return count;
}
let s = "abaab";
console.log(palindromicSubstring(s));

// TC=O(n*n*n)
// SC=O(n)

function palindromicSubstring(s) {
    let n = s.length;
    function isPalindrome(str) {
        let rev = "";
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        return true ? rev === str : false;
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = i; j < n; j++) {
            res += s[j];
            if (isPalindrome(res)) {
                if(res.length>1){
                count++;
                console.log(res)
                }
            }
        }
    }
    return count;
}
let s = "abaab";
console.log(palindromicSubstring(s));
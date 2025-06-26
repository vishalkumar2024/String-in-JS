// Given a string s without spaces, a character ch and an integer count. Your
// task is to return the substring that remains after the character ch has
// appeared count number of times.
// Note:  Assume upper case and lower case alphabets are different. “”(Empty
// string) should be returned if it is not possible, or the remaining substring
//  is empty.

function remaining(s, ch, count) {
    let res = "";
    let freq = 0;
    for (let i = 0; i < s.length; i++) { //TC=O(n)
        if (s[i] == ch) {
            freq++
        }
        if (freq == count) {
            let cnt = 0
            while (i < s.length) {
                if (cnt > 0) {  // It is to avoid adding first char. in res which is basically "ch"
                    res += s[i];
                }
                i++
                cnt++
            }
            return res
        }
    }

    return ""
}
let s = "Thisisdemostring";
ch = 'i';
count = 3;
console.log(remaining(s, ch, count));

// TC=O(n)
// SC=O(1)
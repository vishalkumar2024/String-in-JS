// Problem no. 125 in leetcode

function isPalindrome(str) {
   let s= str.toLowerCase();

    function valid(x) {
        if (x >= "a" && x <= "z" || x >= "0" && x <= "9") {
            return true;
        }
        return false;
    }

    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if ( valid(s[i]) && valid(s[j])) {
            if (s[i] === s[j]) {
                i++;
                j--;
            }
            else{
                return false
            }
        }

        else if (!valid(s[i])) {
            i++;
        }
        else if (!valid(s[j])) {
            j--;
        }
    }
    return true;
};

let str = " A man, a plan, a canal: Panama";
console.log(isPalindrome(str));

// TC=O(n/2)
// SC=O(1)
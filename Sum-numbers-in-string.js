// Given two strings string1 and string2, remove those characters from first string(string1)
// which are present in second string(string2). Both the strings are different and contain
// only lowercase characters.

function removeChars(s1, s2) {
    let m=s1.length
    let n=s2.length;
    let map = new Map();  //SC=O(n)
    for (let i = 0; i < n; i++) { //TC=O(n)
        if (!map.has(s2[i])) {
            map.set(s2[i]);
        }
    }
   let res="";
   for (let i = 0; i < m; i++) { //TC=O(m)
        if (!map.has(s1[i])) {
           res+=s1[i];
        }
    }
    return res
}
string1 = "computer"
string2 = "cat"
console.log(removeChars(string1,string2));

// TC=O(m+n)
// SC=O(n)
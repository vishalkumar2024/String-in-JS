// Given a string s1 and another string s2. Find the minimum index of the character
//  in s1 that is also present in s2.

function minIdx(s1, s2) {
    let n=s1.length
    let m=s2.length
    let map = new Map(); //SC=O(m)
    for (let i = 0; i < m; i++) {  //TC=O(m)
        if (!map.has(s2[i])) {
            map.set(s2[i]);
        }
    }
    for (let i = 0; i < n; i++) {  //TC=O(n)
        if(map.has(s1[i])){
            return i
        }
    }
    return -1;
}
s1 = "dcffaet";
s2 = "raftaar"
console.log(minIdx(s1, s2));

// TC= O(n)+O(m) ~ O(n)
// SC=O(m)
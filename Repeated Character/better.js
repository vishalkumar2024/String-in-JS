// Given a string consisting of lowercase english alphabets. Find the repeated 
// character present first in the string.

function Repeat(s) {
    let n = s.length;        
    let map=new Map();      // SC=O(n)
    for (let i = 0; i < n; i++) {    // TC=O(n)
        if (map.has(s[i])) {
            map.set(s[i],map.get(s[i])+1);
        }
        else{
            map.set(s[i],1);
        }
    } 
    console.log(map)

    for(let [key,value] of map){
        if(value>1){
            return key;
        }
    }
    return -1;
}
str="bih";
console.log(Repeat(str));

// TC=O(n)
// SC=O(n) 
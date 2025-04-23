// Given a string consisting of lowercase english alphabets. Find the repeated 
// character present first in the string.

function Repeat(s) {
    let n = s.length;
    let res=[];         //SC=O(n/2) - because in worst case senerio maximum n/2 element can be in res array
    let map=new Map();      // SC=O(n)
    for (let i = 0; i < n; i++) {    // TC=O(n)
        if (map.has(s[i])) {
            map.set(s[i],map.get(s[i])+1);
            res.push(s[i]);
        }
        else{
            map.set(s[i],1);
        }
    } 
    console.log(map)

    for(let [key,value] of map){
        if(value>=2){
            return key;
        }
    }
    return -1;
}
str="yhkoryenollwpjwqquwigwnebvypnigmpsdjtjylu";
console.log(Repeat(str));

// TC=O(n)
// SC=O(n)+O(n/2)
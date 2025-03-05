function Repeat(str) {
    let n = str.length;
    let res=[];         //SC=O(n/2) - because in worst case senerio maximum n/2 element can be in res array
    let map=new Map();      // SC=O(n)
    for (let i = 0; i < n; i++) {    // TC=O(n)
        if (map.has(str[i])) {
            res.push(str[i]);
        }
        else{
            map.set(str[i]);
        }
    }
    return res
}
str="boboss";
console.log(Repeat(str));

// TC=O(n)
// SC=O(n)+O(n/2)
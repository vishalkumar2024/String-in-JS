function removeChars(s1, s2) {
    let map = new Map();
    for (let i = 0; i < s2.length; i++) {
        if (!map.has(s2[i])) {
            map.set(s2[i]);
        }
    }
   let res="";
   for (let i = 0; i < s1.length; i++) {
        if (!map.has(s1[i])) {
           res+=s1[i];
        }
    }
    return res
}
string1 = "computer"
string2 = "cat"
console.log(removeChars(string1,string2));

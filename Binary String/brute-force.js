function binary(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (s[i]=="1" && s[j]=="1" && i!=j) {
                count++;
            }
        }
    }
    return count;
}
let s = "1111";
console.log(binary(s));
// output=6
function remaining(s, ch, count) {
    let res = "";
    let freq = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ch) {
            freq++
        }
        if (freq == count) {
            res += s[i];
        }
    }
    return res;
}
let s = "Thisisdemostring";
ch = 'i';
count = 3;
console.log(remaining(s, ch, count));


function EasyString(s) {
    let n = s.length;
    let str = s.toLowerCase();
    let res="";
    for (let i = 0; i < n;) {
        let curr = str[i];
        let count = 0;
        while (curr == str[i] && i<n) {
            count++;
            i++;
        }
        let cntStr=count.toString();
        res+= cntStr;
        res+= curr;
    }
  return res;
}s
let s = "aaABBb";
console.log(EasyString(s));
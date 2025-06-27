
function modify(s) {
    let n = s.length;
    let res = "";
    for (let i = 0; i < n;) {
        if (s[i] == " ") {
            i++;
        } else {
            res += s[i];
            i++
        }
    }
    return res;
}

let s = "vishal Kumar soni";
console.log(modify(s));
console.log(s.replaceAll(" ", "")) // using builtIn method

// TC=O(n)
// SO=O(n)
 


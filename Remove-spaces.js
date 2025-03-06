
function modify(s) {
    let n = s.length;
    let res = "";
    for (let i = 0; i < n; i++) {
        if (s.charCodeAt(i) === 32) {
            res = s.replaceAll(s[i], "");
        }
    }
    return res;
}

let s = "vishal Kumar soni";
console.log(modify(s));

//TC=O(n)


// function modify(s) {
//     return s.split(" ").join("");
// }
// let s = "Vishal Kumar Soni";
// console.log(modify(s))
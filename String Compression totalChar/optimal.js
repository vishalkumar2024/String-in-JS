function Compress(s) {
    let n = s.length;
    let res="";
    for (let i = 0; i < n;) { //TC=O(n)
        let count = 0;
        let char = s[i];
        while (char == s[i] && i < n) {
            count++;
            i++;
        }

        res+= char;

        if (count > 1) {
            let cntString = count.toString();
            for (let digit of cntString) {
                res+=digit; // Store each digit separately
            }
        }
    }
    return res.length;
}
let s = ["a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]
// Compressed:- ab2c10
console.log(Compress(s));


// TC=O(n)
// SC=O(1)

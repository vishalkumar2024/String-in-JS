function Compress(s) {
    let n = s.length;
    let idx = 0;
    for (let i = 0; i < n;) {
        let count = 0;
        let char = s[i];
        while (char == s[i] && i < n) {
            count++;
            i++;
        }

        s[idx++] = char;

        if (count > 1) {
            let cntString = count.toString();
            for (let digit of cntString) {
                s[idx++] = digit; // Store each digit separately
            }
        }
    }
    return idx;
}
let s = ["a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]
// Compressed:- ab2c10
console.log(Compress(s));

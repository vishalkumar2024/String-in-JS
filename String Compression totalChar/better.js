function Compress(s) {
    let n = s.length;
    let count = 0;
    let i = 0;
    let j = 0;
    let curr = s[0];
    while (j < n) {   // TC=O(n)
        if (s[j] == curr) {
            if ((j - i) == 0) {
                count += 1;
                j++;
            }
            if ((j - i) >= 1 && (j - i) <= 9) {
                if (s[j] == s[j - 2]) { j++ }
                else {
                    count += 1;
                    j++;
                }
            }
            if ((j - i) === 9) {
                count += 1;
                j++;
            }
            else if ((j - i) > 9) {
                j++;
            }
        }
        else {
            curr = s[j];
            i = j;
        }
    }
    return count;
}
let s = ["a","b","b","c","c","c","c","c","c","c","c","c","c"]
// Compressed:- ab2c10
console.log(Compress(s));

// TC=O(n)
// SC=O(1)

//This function compresses the string based on its occurence 
// like for string- ["a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c",
//  "c"];
// Compressed:- ab2c10 &  result- 6
// and returns the length of compressed string

function Compression(s) {
    let n = s.length;
    let count = 0;
    let map = {};  //SC=O(n)
    for (let i = 0; i < n; i++) {    //TC=O(n)
        if (map[s[i]] == undefined) {
            map[s[i]] = 1;
        }
        else {
            map[s[i]]++;
        }
    }
    for (let key in map) {  //TC=O(n)
        if (map[key] === 1) {
            count++;
        }
        if (map[key] > 1 && map[key] <= 9) {
            count += 2;
        }
        // If a char. occurs more than 9 times it will take 3 places
        if (map[key] > 9) {
            count += 3;
        }
    }
    return count;
}
let s = ["a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"];
// Compressed:- ab2c10
console.log(Compression(s));

// TC=O(n)+O(n) ~ O(n)
// SC = O(n)
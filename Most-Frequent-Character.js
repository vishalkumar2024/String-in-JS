// This function returns the maximum occurring character in the string s. If more 
// than one character occurs the maximum number of times then print the
//  lexicographically smaller character.

function getMaxOccuringChar(s) {
    let n=s.length;
    let obj = {};      //SC=O(n)
    for (let i = 0; i < n; i++) {  //TC=O(n)
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        }
        else {
            obj[s[i]]++;
        }
    }
    let max = 0;
    let value = '~';
    for (let key in obj) {    //TC=O(n)
        if (obj[key] > max || (obj[key] === max && key < value)) {
            max = obj[key];
            value = key;
        }
    }
    return value;
}

let s = "oaarqxxvbq";
console.log(getMaxOccuringChar(s))

//TC=O(n)+O(n)
// SC=O(n)
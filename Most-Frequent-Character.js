function getMaxOccuringChar(s) {
    let n=s.length;
    let obj = {};
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
    for (let key in obj) {
        if (obj[key] > max || (obj[key] === max && key < value)) {
            max = obj[key];
            value = key;
        }
    }
    return value;
}

let s = "oaarqxxvbq"
console.log(getMaxOccuringChar(s))


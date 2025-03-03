function getMaxOccuringChar(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        }
        else {
            obj[s[i]]++;
        }
    }
    console.log(obj)
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

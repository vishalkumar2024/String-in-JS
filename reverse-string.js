function reverseString(s) {
    let i = 0;
    let j = s.length-1;
    while (i <= j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s
}

let s="ask";
console.log(reverseString(s));
function Reverse(str) {
    let n = str.length;
    let ReverseString = "";
    for (let i = n - 1; i >= 0; i--) {
        ReverseString += str[i];
    }
    return ReverseString;
}
str = "Hello World";
console.log(Reverse(str));

// TC = O(n)
// SC=O(n)

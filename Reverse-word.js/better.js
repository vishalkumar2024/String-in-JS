function reverse(s) {
    let str = s.trim().split(/\s+/); //Tc=O(n)
    console.log(str)
    let i = 0;
    let j = str.length - 1;
    while (i < j) {   //TC=O(n/2)
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }
    return str.join(" ");
}
s = "a good   example";
// Output: "example good a"
console.log(reverse(s));

// TC=O(n)
// SC=O(n) - because of str array

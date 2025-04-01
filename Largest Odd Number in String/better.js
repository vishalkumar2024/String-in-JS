function largestOddNumber(num) {
    let res = ""  //SC=O(n)
    let j = -1
    for (let i = num.length - 1; i >= 0; i--) { //TC=O(n)
        if (num[i] % 2 !== 0) {
            j = i;
            break;
        }
    }

    for (let i = 0; i <= j; i++) {  //TC=O(n)
        res += num[i];
    }
    return res;

};
let num = "925346"
console.log(largestOddNumber(num))

// TC=O(n+n) ~ O(n)
// SC=O(n)



















function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {  //TC=O(n)
        if (num[i] % 2 === 1) {
            return num.slice(0, i + 1) //TC=O(n)
        }
    }
    return ''
}
let num = "925346"
console.log(largestOddNumber(num))

// TC= O(n)
// SC=O(n)
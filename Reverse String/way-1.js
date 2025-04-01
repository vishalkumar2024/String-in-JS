function reverseString(s) {
    let n=s.length
    let charArr = [];      //SC=O(n)
    for (let char of s) {    //TC=O(n)
        charArr.push(char);
    }

    let i = 0;
    let j = n - 1;
    while (i <= j) {           //TC=O(n)
        let temp = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = temp;
        i++;
        j--;
    }

    let res = ""                    //SC=O(n)
    for (let val of charArr) {   //TC=O(n)
        res += val;
    }
    return res;
}

let s = "Hello World";
console.log(reverseString(s));

// TC=O(n)+O(n)+O(n) ~ O(n)
// SC=O(n)+O(n) ~ O(n)

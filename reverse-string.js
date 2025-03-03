function reverseString(s) {
    let charArr = [];      //SC=O(n)
    for (let char of s) {    //TC=O(n)
        charArr.push(char);
    }

    let i = 0;
    let j = s.length - 1;
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

let s = "ask";
console.log(reverseString(s));


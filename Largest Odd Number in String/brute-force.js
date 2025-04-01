
function largestOddNumber(num) {
    let res = ""
    let longestRes="";
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            for(let k=0;k<=i;k++){
               res+=num[k]
            }
            longestRes=res.length>longestRes.length?res:longestRes
            res=""
        }
    }
    return longestRes;
};
let num = "925346"
console.log(largestOddNumber(num))

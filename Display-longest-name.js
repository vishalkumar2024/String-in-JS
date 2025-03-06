// Given an array arr[] containing strings of names. Our task is to return the
//  longest string. If there are multiple names of the longest size, return the
//  first occurring name.

function longest(arr) {
    let max = 0;
    let maxValue = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            maxValue = arr[i];
        }
    }
    return maxValue;
}
let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"];
console.log(longest(arr));

// TC=O(n)
// SC=O(1)
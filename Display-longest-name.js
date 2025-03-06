function longest(arr) {

    function size(x) {
        let count = 0;
        while (x > 0) {
            x = Math.floor(x / 10);
            count++;
        }
        return count;
    }

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


// function size(x) {
//     let count = 0;
//     while (x > 0) {
//         x = Math.floor(x / 10);
//         count++;
//     }
//     return count;
// }
// console.log(size("vis"));
// console.log()
// console.log(arr[1].length)
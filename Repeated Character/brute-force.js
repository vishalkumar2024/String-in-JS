// function repeat(str){
//     let n=str.length;
//     let i=0;
//     let j=i+1;
//     while(j<n){
//         if(str[i]==str[j]){
//             return str[i]
//         }
//         j++;
//     }
// }
// let str="geeksforeeks";
// console.log(repeat(str))


function repeat(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (str[i] == str[j]) {
              return str[i]
            }
        }
    }
    return "#";

}
let str = "geeksforgeeks";
console.log(repeat(str));

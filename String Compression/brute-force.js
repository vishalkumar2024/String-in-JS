function Compression(s) {
    let n = s.length;
    let count = 0;
    let map = {};  //SC=O(n)
    for (let i = 0; i < n; i++) {    //TC=O(n)
        if (map[s[i]] == undefined) {
            map[s[i]] = 1;
        }
        else {
            map[s[i]]++;
        }
    }
    let ele = 0;
    for (let key in map) {
        if(map[key]===1){
          count++;
        }
        if(map[key]>1 && map[key]<=9){
          count+=2;
        }
        // ele++;
        if (map[key] > 9) {
            count+=3;
        }
        // count += (2 * ele);
    }
    return count;
}
let s = ["a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"];
console.log(Compression(s));

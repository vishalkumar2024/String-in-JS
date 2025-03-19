function minIdx(s1, s2) {
    let n=s1.length
    let m=s2.length
    let map = new Map(); //SC=O(s2.length)
    for (let i = 0; i < m; i++) {  TC=O()
        if (!map.has(s2[i])) {
            map.set(s2[i]);
        }
    }
    for (let i = 0; i < n; i++) {
        if(map.has(s1[i])){
            return i
        }
    }
    return -1;
   
}
s1 = "adcffaet", s2 = "onkl"
console.log(minIdx(s1, s2));
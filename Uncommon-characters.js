function unCommon(s1, s2) {
    let map1 = new Map(); //SC=O(m)
    let map2 = new Map();  //SC-O(n)

    // Store characters of s1
    for (let char of s1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    // Store characters of s2
    for (let char of s2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    console.log(map1)
    console.log(map2)
    let res = "";

    // Find characters in s1 that are not in s2
    for (let char of s1) {
        if (!map2.has(char)) {
            res += char;
        }
    }

    // Find characters in s2 that are not in s1
    for (let char of s2) {
        if (!map1.has(char)) {
            res += char;
        }
    }

    // Return sorted string 
    return res.split("").sort().join("");
}
s1 = "swknwhkhhr"
s2 = "cgx"
console.log(unCommon(s1, s2));
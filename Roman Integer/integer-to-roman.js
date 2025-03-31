function Roman(num) {
    let map = new Map();
    map.set(1000, "M")
    map.set(900, "CM")
    map.set(500, "D")
    map.set(400, "CD")
    map.set(100, "C")
    map.set(90, "XC")
    map.set(50, "L")
    map.set(40, "XL")
    map.set(10, "X")
    map.set(9, "IX")
    map.set(5, "V")
    map.set(4, "IV")
    map.set(1, "I")

    let s = ""; 
    const entries = [...map.entries()];
    for (let i = 0; i < entries.length;) {
        if (entries[i][0] <= num) {
            let times=Math.floor(num/entries[i][0])
            num = num % entries[i][0]
            s += entries[i][1].repeat(times); 
        }
        else{
            i++
        }
    }

    return s;
}

let num = 3749
console.log(Roman(num));

// TC=O(1) O(1) (Constant Time): Since the number of iterations is bounded and does not 
// depend on num, the function runs in constant time.

// SC=O(1)
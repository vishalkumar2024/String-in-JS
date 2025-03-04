function reverseString(str) {
    
    let arr = str.split('');
    
    arr.reverse();
    
    // Convert array back to string
    return arr.join('');
}

let s = "Hello World";
console.log(reverseString(s));

// TC=O(n)+O(n)+O(n)
// SC=O(n)+O(n)

function reverseString(str) {

    // Convert string to an array (since strings are immutable in JS)
    let arr = str.split('');
    
    // reverse the array
    arr.reverse();
    
    // Convert array back to string
    return arr.join('');
}

let s = "Hello World";
console.log(reverseString(s));

// TC=O(n)
// SC=O(n)

function reverseWord(s) {
    let n = s.length;
    // Step 1: Reverse the entire string first
    let revStr = "";     //SC=O(n)
    for (let i = n - 1; i >= 0; i--) { //TC=O(n)
        revStr += s[i];
    }

    // Function to reverse a word
    function reverse(str) {  //TC=O(n)
        let rev = "";      // SC=O(n) ~ worst case
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        return rev;
    }

    // Step 2: Traverse the reversed string and reverse each word
    let sentence = "";   //SC=O(n)
    let word = "";     //SC=O(n)
    for (let i = 0; i < n; i++) {  //TC=O(n)
        if (revStr[i] != " ") {
            word += revStr[i];
        }
        else {
            // If space is encountered, reverse the word and add to sentence
            if (word.length > 0) {
                sentence += reverse(word) + " ";
                word = "";
            }
        }
    }

    // Step 3: For the last word (because it won't have space after it)
    if (word != "") {
        sentence += reverse(word);
    }
    
    return sentence.trim();  //TC=O(n)
}
s = "  The Real    World  ";
console.log(reverseWord(s));


// TC=O(n)+O(n)+O(n)+O(n) = O(4n) ~ O(n)
// SC=O(n)+O(n)+O(n)+O(n) = O(4n) ~ O(n)

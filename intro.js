// declaration of strings

// let str1=new String("The Software Engineering");

// let str2="The Web development";  //Double quotes
// let str3='The Web development';  //Single quotes
// let str4=`The Web development`;  //backtick
// console.log(str1,str2,str3,str4)

// Use of backticks
let strr="world";
console.log`This is a beautiful ${strr} yeah`;
//output 🙄- [ 'This is a beautiful ', ' yeah' ] world 

//String Length
let str="This is a string";
console.log(str.length);

//Accessing specific character
console.log(str[2]);
console.log(str.charAt(2));


// Looping through String
for(let i=0;i<str.length;i++){
    console.log(str[i])
}



// Modifying String
str[3]="t";
console.log(str)  // Does not work because string in js is immutable
// instead we use
console.log(str.replace("s","t"))
console.log(str.replaceAll("i","z"));


//Convert object into string
let obj={name:"vishal"};
console.log(typeof JSON.stringify(obj))


//given array of names count the number of names starting with n or N

let name = ["rajesh", "nayan", "Nisha", "aditya"];
count = 0;
for (let p = 0; p < name.length; p++) {
    if (name[p][0] == 'N' || name[p][0] == 'n') {
        count += 1;
    }
}
console.log("name start from n : ", count);
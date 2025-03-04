function Reverse(str){
   let ReverseString="";
   for(let i=str.length-1;i>=0;i--){
     ReverseString+=str[i];
   }
   return ReverseString;
}
str="Hello World";
console.log(Reverse(str));
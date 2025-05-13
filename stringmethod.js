//Stringmethods

let a = "hello java welcome to the coding world java"

console.log(a.length);//----------------------->Tells the length of character(letters)
console.log(a.toUpperCase());//---------------->changes the words to Capital letters
console.log(a.toLowerCase());//---------------->changes the words to small letters
console.log(a.charAt(26));//-------------------->Gives the exact charcter when number is entered
console.log(a.indexOf("a"));//------------------>Gies the first character output 
console.log(a.lastIndexOf("a"));//-------------->Gives the last character ooutput
console.log(a.slice(10));//-------------------->Give only 10 characters from last,if we use +10 then it cuts  first 10 character & give remaining as output
console.log(a.substring(0,10));//-------------->give the index & return the characters
console.log(a.replace("java","javascript"));//--->It can replace the single word which comes first
console.log(a.replaceAll("java","js"));//-------->It can replace all the word in once 
console.log(a.trim());//------------------------>Reduce all the spaces in front and back of the paragraph
console.log(a.split("").join(""));//------------>used to split the letters & join the character
console.log(a.concat( " nice to meet yoy"));//-->used to join strings
console.log(a.startsWith("a"));//--------------->indicates the characters whether it starts with given input character or not
console.log(a.endsWith("a"));//----------------->indicates the characters whether it ends with given input character or not
console.log(a.includes("welcome"));//----------->indicates the characters whether it is inclued  with given input character or not

let b = "chennai city center"
console.log(b.replaceAll("c","C"));


// Array Methods

//push
//pop
//shift
//unshift
//slice
//sort
//reverse

//push------------------------>Adds a new element to the end of the array
let pu = [10,20,30,40,50];
pu.push(60);
console.log(pu);

//pop-------------------------->Remove the last element from the array
let po =[10,20,30,40,50];
po.pop();
console.log(po);

//shift------------------------->Remove the first element from the array

let sh = [10,20,30,40,50];
sh.shift();
console.log(sh);

//unshift---------------------->adds a new element to the beginning odf the array

let un = [10,20,30,40,50];
un.unshift(9);
console.log(un);

//splice----------------------->Add or remove element from the array
//syntax
//variable name.splice(index,splice,value)

//0--->it is used to add the value in the given index
//1--->it is used to replace the givrn index space 

let days = ["monday","tuesday","thursday","thursday","friday","saturday"];
days.splice(3,0,"wednesday")
console.log(days);

let day = ["monday","tuesday","thursday","thursday","friday","saturday"];
day.splice(3,1,"wednesday")
console.log(day);

//sort

let ab = ["mango","apple","orange","banana","guava","pineapple","dargionfruit"]
console.log(ab.sort());

//reverse

let rev ="trendnologies";

console.log(rev.split("").reverse().join(""));

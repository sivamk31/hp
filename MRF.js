//map//reduce
//filter

//Map()------------->creates a new array by providing function to each element of the original array,
//  like transformation or modification of each item in the array
// variable name.map((value,index,accumulator)=>)---->syntax

//-------->USES ARITHMETIC OPERATOR

const a = [10,20,30,40,50,60]
const b = a.map((val,ind,acc)=>val*5)
console.log(b);

const s = [10,20,30,40,50,60]
const r = s.map((val,ind,acc)=>ind*5)
console.log(r);

//accumulator will not work in map function

//filter()----->it crates a new arry with elements that pass a certain condition(test).it acts 
//like a filter that only lets through the items th\at meet the criteria.

//variable name.filter((value,index,accumulator)=>)---->syntax

//accumulator will not work in filter 

//--->USES COMPARISON OPERATOR

const c = [10,20,30,40,50,569,78,90,559,34,8969]
let d = c.filter((x,y,z)=>x>10)
console.log(d);

const e = [10,20,30,40,50,569,78,90,559,34,8969]
let t = e.filter((x,y,z)=>y>5)
console.log(t);

//reduce()------->Reduces an array to a single value.it's like summarizing or combining all the elements into one final result.
//syntax
//variable name.reduce((accumulator,actual arryay)=>)

    let red = [10,20,30,40]
    let ced = red.reduce((a,b)=>a-b)
    console.log(ced);
    
    let ra = ["siv","simb","ven","kal"]
    let f = ra.reduce((a,b)=>a+b)
    console.log(f);
    
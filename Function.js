//function
//syntax
//function name(){}--->Format

function js () {
    var a=10;
    var a=20;
    console.log(a);

    let b =100;
    b=200;
    console.log(b);

    const c = 30
    console.log(c);    
}
js();//-------->Calling the function name

//Function types
//Function statement Declaration---> parameter & arguments

function ss (hi){
console.log(hi);//------------>hi is the parameter or variable
}
ss("hello play");//----->hello play is argument which is passed as a value for the parameter

//Function Expression or Anonymous Function
//* Function passed inside the variable 

let a= function fun (exp){
    console.log(exp);
}
a("expression");

//Anonymous function ---> called without function name

let b = function (hello){
    console.log(hello);
}
b("anonymous");

//Immediate Invoke function expression--->Function given inside the bracket)

(function (iife){
    console.log(iife);
    
})("immediate");

//Arrow function---->single line function 
//()=>{}--->own syntax

let d = (gg)=>{console.log(gg);}
d("arrow function");
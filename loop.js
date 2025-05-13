//for loop
//syntax
//for (initialization;condition;iteration)

for(let a=2;a<=5;a++){
    console.log(a);   
}
//while loop
//syntax
//initialization
//while(condition){
//console
//iteration
//}

let b = 5;
while (b<=0){
    console.log(b);
    b--
}

//dowhile---

let c =1;
do{
    console.log("java");
    c++
}while(c<=5);

//for of--->used to separate arrays

let days = ["sunday","monday","tuesday","wednesdayday","thursday","friday","saturday"]
for(sap of days){
    console.log(sap);
}

//for in---->used to separate keys & values of object

let obj = {
    name : "siva",
    place : "chennai",
    num : 83838838838,
    id : 283746327
}
for (result in obj){

    console.log(result+" : "+obj[result])
}

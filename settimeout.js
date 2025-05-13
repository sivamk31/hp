//settimeout

function box1(){
     setTimeout(()=>{
        console.log("successful");
     },5000)
}
function box2(){
    setTimeout(()=>{
       console.log("loading");
    },1000)
}
function box3(){
    setTimeout(()=>{
       console.log("complete");
    },4000)
}
box1();
box2();
box3();
//running output based on time is called asynchronous
//running based on called function order is cxalled synchronous
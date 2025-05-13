//promise

function go(){
return new Promise((resolve, reject) => {
   
   setTimeout(() => {
    const shop =true
    if(shop){

      resolve("i am going to shop")}
      else{
        reject("not going to shop")
      }
   }, 5000);
  
})
}
function buy(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        const product=false
        if(product){
      resolve("i am buying the product")}
      else{
        reject("not buying")
      }

   }, 2000);
})
}
function change(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        const collect =true
        if(collect){
   resolve("collect the change")}
        else
        reject("not collect the change")
   }, 2000);
    
})
}
function back(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        const home = true
        if (home){
   resolve("Return to home")}
   else{
    reject("not return to home")
   }
   }, 2000);
    
})
}

// go()
// .then(val=>{console.log(val); return buy()})
// .catch(val=>{console.log(val); return change()})
// .then(val=>{console.log(val); return back()})
// .then(val=>{console.log(val)})

async function js() {
    try {
        const a = await go();
        console.log(a);
        const b = await buy();
        console.log(b);
        const c = await change();
        console.log(c);
        const d = await back();
        console.log(d);
        

    }catch(error){
        console.log(error);
        
    }

}js();
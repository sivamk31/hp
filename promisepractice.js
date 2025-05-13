// promise practice session window

function go(){
    return new Promise((resolve, reject) => {
        const go = true;
        if (go){
        resolve("go to car showroom")}
        else
        {reject("not go to shoeroom")}
    })
}

function choose(){
    return new Promise((resolve, reject) => {
        const choose = true;
        if(choose){
        resolve("choose the model of car")}
        else{
            reject("not choose the car")
        }

    })
}

function buy(){
    return new Promise((resolve, reject) => {
        const buy = false;
        if(buy){
        resolve("buy the car")}
        else{
            reject("not bought the car")
        }
    })
}

function takecar(){
    return new Promise((resolve, reject) => {
        const takecar = true;
        if(takecar){
        resolve("Deliver the car to homes")}
        else{
            reject("not delivered the car")
        }
    })
}
// go()
// .then(sap=>{console.log(sap); return choose()})
// .then(give=>{console.log(give); return buy()})
// .catch(choose=>{console.log(choose); return takecar()})
// .then(take=>{console.log(take);})

async function Car(){
    try{
        const a = await go();
        console.log(a);
        const b =await choose();
        console.log(b);
        const c = await buy();
        console.log(c);
        const d = await takecar();
        console.log(d)
;
        
    }catch(error) {
        console.log(error);
        
    }

}
 Car();


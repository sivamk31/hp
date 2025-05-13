//callback

function walk(callback){
    setTimeout(()=>{
       console.log("walk the dog");
       callback();
    },5000)
}
function clean(callback){
    setTimeout(()=>{
       console.log("clean the kitchen");
       callback()
    },1000)
}
//walk(clean);

function trash(callback){
    setTimeout(()=>{
       console.log("put the trash out");
       callback()
    },500)
}
function work(callback){
    setTimeout(()=>{
       console.log("work completed");
    },5000)
}
walk(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{

            })
        })
    })
})

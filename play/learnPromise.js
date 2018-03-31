const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success");
        //reject("Failed");
    },2500)

});


//Either resolve or rejected is executed once
myPromise.then((sucess)=>{
    console.log(sucess);
},(failure)=>{
    console.log(failure);
})
var Prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5,6];
        resolve(roll_no);
        reject("Error while reading roll_no");
    },5000)
});

Prom
.then((rollNoRes)=>{
    console.log("The array is: "+rollNoRes);
})
.catch((errorRes)=>{
    console.log(errorRes);
})
const arg1=process.argv[2];
const arg=parseInt(arg1);
if(!isNaN(arg)){
    for(let i=0;i<arg;i++){
        console.log("C is fun");
    }
}
else{
console.log("Missing number of occurrences");
}


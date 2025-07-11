const arg1= process.argv[2];
let c = parseInt(arg1);
if (!isNaN(c)){
    console.log("My number: "+ c);
}
else{
    console.log("Not a number");
}


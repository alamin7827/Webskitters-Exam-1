let num = 7;
let isprime = true;

for(let i =2; i<num; i++){
    if(num % i ==0){
        isprime = false;
        break;
    }
    
}
if(isprime){
    console.log("Number is Prime");
}
else{
    console.log("Number is Not prime");
}
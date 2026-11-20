let num = 7;
let isprime = true;

if(num<=1){
    console.log("Not Prime");
}

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
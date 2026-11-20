let a = 10;
let b = 90;
let c = 67;

let large =0;
if(a>b){
    if(a>c){
       large = a;
    }
    else{
        large = c;
    }
}
else if(b>c){
    large = b;

}
else{
    large =c;
}

console.log(large);
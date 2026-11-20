let num =12345;
let revNum =0;

while(num>0){
    let last = num % 10;
    revNum =revNum * 10 +last;
    num =Math.floor (num /10);

}
console.log(revNum);
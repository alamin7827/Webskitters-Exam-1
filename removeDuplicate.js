let input = [10, 20, 10, 30, 20, 40] ;
let output =[];

for(let i =0; i<input.length; i++){
    if(output.includes(input[i])){
        continue;
    }
    output.push(input[i]);

}
console.log(output);

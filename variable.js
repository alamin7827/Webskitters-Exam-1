var name = "alamin";
var name = "sumon"; //redecleared
name = "sanu"; //updation
console.log(name);

let age = 20;
age = 30; //updation
console.log(age);

const address ="Barrackpore";
console.log(address);

//block scope
{
    let year = 2021;
    console.log("Year is:",year);
}
// console.log("Year is:",year); //not defined bcz in block scope declered


//function scope
function city(){
    var name = "kolkata";
    console.log(name);
}

city();
console.log(name);
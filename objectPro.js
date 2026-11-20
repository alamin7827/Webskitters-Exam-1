let employee ={
    name :"Alamin",
    age : 23,
    department : "Backend dev",
    salary : 50000

}

for(let emp in employee){
    console.log(`${emp}:${employee[emp]}`);
}
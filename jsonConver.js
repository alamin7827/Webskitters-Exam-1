
let user ={
    name :"Alamin",
    age : 23,
    department : "Backend dev",
    salary : 50000

}


const jsonString = JSON.stringify(user);
console.log(jsonString);

const objectString = JSON.parse(jsonString);
console.log(objectString);
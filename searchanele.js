let names=["alamin","milka","amir","santunu"];
let student = "ami";
let result = false;
for(let i=0; i<names.length;i++){
    if(names[i] === student){
        result = true;

    }
}

if(result){
    console.log("student exists");
}
else{
    console.log("Student not exists");
}
let student={
    name:"Rahul",
    Roll_Number:80,
    Course:"MERN stack",
    Marks:900
}


// for(let stu in student){
//     console.log(`${stu}:${student[stu]}`)
// }

student.Marks= 1200;

student.grade = 'A';

for(let stu in student){
    console.log(`${stu}:${student[stu]}`)
}



//First program on Objects
var student = {
    name : "Jocob",
    sclass : "VI",
    rollno : 12 
 };
//code to list the properties of Object
alert(student.name);
alert(student.sclass);
alert(student.rollno);

//code to delete the rollno and display the property of object
console.log(student);
console.log("Before Deleting rollNumber "+ student.rollno);
delete student.rollno;
console.log(student);


//code to find the length of object
objectLength = Object.keys(student).length
console.log('Size of the current object : ' + objectLength);


//2nd question
var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}]

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log( "Read the book"+book);
    }
}

// 2nd program on "Arrays"
var rank = new Array(1, 3, 5, 7);
rank.push(8);
console.log(rank);

rank.pop();
console.log(rank);

rank.unshift("4");
console.log(rank);


//3rd program on "Conditionals"
var age = window.prompt("Enter your age: ");
if(age>21 && age<=75){
  console.log("Come on in !");
}
else if(age>18 && age<21){
  console.log("Come on in (but not drinking) !");
}
else if(age<18){
  console.log("You are too young to be in here !");
}
else if(age>75){
  console.log("Are you sure you want to be gere ?");
}
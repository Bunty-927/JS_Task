var student = {
    name : "Jocob",
    sclass : "VI",
    rollno : 12 
 };

alert(student.name);
alert(student.sclass);
alert(student.rollno);

console.log("hi");
console.log(student);
console.log("Before Deleting rollNumber "+ student.rollno);
delete student.rollno;
console.log(student);



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

// 3rd question
var rank = new Array(1, 3, 5, 7);
rank.push(8);
console.log(rank);

rank.pop();
console.log(rank);

rank.unshift("4");
console.log(rank);


//4th question
var name = window.prompt("Enter your name: ");
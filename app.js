var value1 = +prompt("Enter the table number")
var value2 = +prompt("Enter the table range")
var i = 1
while(i <= value2){
    document.write(value1 + " x " + i + " = " + value1*i + "<br>")
    i++
}

do{
    document.write(value1 + " x " + i + " = " + value2*i + "<br>")
    i++
}
while(i <= value2)

var month = prompt("Enter a month");
var charsInMonth = month.length;
    if (charsInMonth > 3) {
    monthAbbrev = month.slice(0, 3);
}
document.write(month)

var str = prompt("Enter some text");
var numChars = str.length;
    for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
    alert("No double spaces!");
    break;
}
}

// var computer = +prompt("Enter marks of Computer subject")
// var physics = +prompt("Enter marks of Physics subject")
// var urdu = +prompt("Enter marks of Urdu subject")
// var islamiat = +prompt("Enter marks of Islamiat subject")
// var maths = +prompt("Enter marks of Maths subject")
// var grade
// var totalSubjectMarks = computer + physics + urdu + islamiat + maths
// var percentage = totalSubjectMarks/500*100
// if(percentage >=80 && percentage<101){
//     grade = "A+"
// }

// else if(percentage >=70 && percentage<80){
//     grade = "A"
// }

// else if(percentage >=60 && percentage<70){
//     grade = "B"
// }
// else if(percentage >=50 && percentage<60){
//     grade = "C"
// }

// else if(percentage >=40 && percentage<50){
//     grade = "D"
// }

// else if(percentage >101){
//     alert("Invalid number")
// }

// else{
//     grade = "Fail"
// }

// document.write('<table border = 1>'
// +'<tr>'+'<td>'+'Computer'+'</td>'+'<td>'+computer+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Physics'+'</td>'+'<td>'+physics+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Urdu'+'</td>'+'<td>'+urdu+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Islamiat'+'</td>'+'<td>'+islamiat+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Maths'+'</td>'+'<td>'+maths+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Total'+'</td>'+'<td>'+totalSubjectMarks+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Percentage'+'</td>'+'<td>'+percentage+'</td>'+'<tr>'
// +'<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+grade+'</td>'+'<tr>'
// +'</table>')

    
    
    
    
    
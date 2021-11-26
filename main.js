name_of_the_student_array =[]

function update(){


var name1 =document.getElementById("student_1").value
var name2 =document.getElementById("student_2").value
var name3 =document.getElementById("student_3").value
var name4 =document.getElementById("student_4").value

name_of_the_student_array.push(name1,name2,name3,name4)

console.log(name_of_the_student_array)


document.getElementById("display_name").innerHTML =name_of_the_student_array
document.getElementById("submmit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block"
}

function sort(){
name_of_the_student_array.sort()
console.log(name_of_the_student_array);
document.getElementById("display_name").innerHTML =name_of_the_student_array
}

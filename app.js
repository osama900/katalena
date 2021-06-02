var welcom = "H! to you in KATALENA"
alert(welcom)

var name = prompt("What is your name ?")
console.log(name)
alert("nice to see you" + name)
var age = prompt("How old are you ?")
console.log(age)

if (age < 10) {
  document.write("<h3> "+ "hellow kid"+"</h3>")
}
else if(age >=10 && age <30){
  document.write("<div>"+"sdfgfddfgfd"+"</div>")
}
else if(age >= 30 && age < 50) {
  document.write("<div> "+ "hellow man"+"</div>")
}
else{
    document.write("<div> "+ "hellow sair"+"</div>")

}


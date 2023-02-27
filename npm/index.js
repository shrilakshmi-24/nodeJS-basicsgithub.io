const upperCase=require("upper-case").upperCase


function greet(name){
    console.log(upperCase(`hello ${name} welcome to the team`))
}
greet("shrilakshmi")
module.exports=greet
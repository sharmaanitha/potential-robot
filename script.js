var containerEle = document.body.querySelector(".container");

//Reads first number
var num1 = prompt("Enter number 1:");

//If input is not a number
if(isNaN(num1))
  //Displays message and stops program
  containerEle.innerHTML = "Input is not an number"
else{
  //Otherwise
  //Reads operator
  op = prompt("Enter an operator (+,-,*,/,%: ");
  //If not valid operator
  if(op !== "+" && op != "-" && op !== "*" && op !== "/" && op !== "%") {
 //Displays message and stops program
containerEle.innerHTML = "Input is not an operator"
}else{
//Otherwise
//Reads second number
var num2 = prompt("Enter number 2: ");
//Converts inputs to numbers
var n1 = Number(num1);
var n2 = Number(num2);
//If second input is not a number
if(isNaN(num2)){
//Displays message and stops program
containerEle.innerHTML = "Input is not an number"
}
  
 else if(op === "+")
  //If operator is '+' performs addition
  containerEle.innerHTML = "Answer : " + (n1 + n2);
else if(op === "-")
  //If operator is '-' performs subtraction
  containerEle.innerHTML = "Answer : " + (n1 - n2);
else if(op === "*")
  //If operator is '*' performs product
  containerEle.innerHTML = "Answer : " + (n1 * n2);
else if(op === "/")
  //If operator is '/' performs division
  containerEle.innerHTML = "Answer : " + (n1 / n2);
else if(op === "%")
//If operator is '%' performs modulo
//division
containerEle.innerHTML = "Answer : " + (n1 % n2);
  }
}
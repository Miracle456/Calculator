 function addTheNumber() {
  
    var num1 = parseInt( document.getElementById('num-1').value)
    var num2 = parseInt(document.getElementById('num-2').value)

    var result = num1 + num2;

    document.getElementById('show').innerHTML= `Sum of ${num1} and ${num2} is ${result}`

 }


// Homework
//  Create a new function subTheNumber which will
//  1. take numbers as input from Id
//  2. subtract addTheNumber,
//  3. Show  the result 

function subTheNumber(){

   var num1 = parseInt( document.getElementById('num-1').value)
    var num2 = parseInt(document.getElementById('num-2').value)

   var result = num1 - num2

   document.getElementById('show').innerHTML= `Substraction of ${num1} and ${num2} is ${result}`

}

divideTheNumber()
function multiplyTheNumber(){

   var num1 = parseInt( document.getElementById('num-1').value)
    var num2 = parseInt(document.getElementById('num-2').value)

   var result = num1 * num2

   document.getElementById('show').innerHTML= `Multiplication of ${num1} and ${num2} is ${result}`

}


function divideTheNumber(){

   var num1 = parseInt( document.getElementById('num-1').value)
    var num2 = parseInt(document.getElementById('num-2').value)

   var result = num1 / num2

   document.getElementById('show').innerHTML= `Division of ${num1} and ${num2} is ${result}`

}
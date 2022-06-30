var calculator = function () {

var number = document.getElementById("number").value;

var writetheequation = document.getElementById("writetheequation").value;

var number1 = document.getElementById("number1").value;

if (writetheequation === "1") {  

   var resulting = number + number1;

   document.write(resulting);
}
   else if (writetheequation === "2") {

      var resulting = number - number1;

      document.write(resulting);
   } else if (writetheequation === "3") {

      var resulting = number * number1;

      document.write(resulting);
   } else if (writetheequation === "4") {

      var resulting = number / number1;

      document.write(resulting);
   } else 
      document.getElementById("look to numbers");
}

document.getElementById("submit").onclick = calculator;
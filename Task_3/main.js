function calc(){
  var a = parseInt(document.querySelector("#value1").value); // just we take a variable from the our page
  var b = parseInt(document.querySelector("#value2").value); // methods querySelector!
  var op = document.querySelector("#operator").value;
  var calculate;
  //we need to convert the string in number, cause we store the value in string, it means that we need to convert
  // parseInt - to keep in mind!
  if (op == "add") {
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  }
  else if (op == "div"){
    calculate = a / b;
  }
  else if (op == "mul"){
    calculate = a * b;
  }

  document.querySelector("#result").innerHTML = calculate;

  var a = "First";
  var b = "Second";
  var c = "Third";

  console.log(d);

  var d = "Fourth";
}

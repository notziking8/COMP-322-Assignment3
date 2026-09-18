
var xValues = [];
var yValues = [];
var operators = [];
var results = [];      
var validResults = []; 

var keepGoing = true;

while (keepGoing) {
  var x = prompt("Enter the first number (x):");
  if (x === null) {
    keepGoing = false;
    break;
  }

  var y = prompt("Enter the second number (y):");
  if (y === null) {
    keepGoing = false;
    break;
  }

  var operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) {
    keepGoing = false;
    break;
  }

  var result;

  if (isNaN(x) || isNaN(y)) {
    result = "wrong input number";
  } else if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/" &&
    operator !== "%"
  ) {
    result = "computation error";
  } else {
    var numX = Number(x);
    var numY = Number(y);

    switch (operator) {
      case "+":
        result = numX + numY;
        break;
      case "-":
        result = numX - numY;
        break;
      case "*":
        result = numX * numY;
        break;
      case "/":
        result = numX / numY;
        break;
      case "%":
        result = numX % numY;
        break;
    }

    validResults.push(result);
  }

  xValues.push(x);
  yValues.push(y);
  operators.push(operator);
  results.push(result);
}

// ---- Results table ----
document.write("<table class=\"results\">");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

for (var i = 0; i < results.length; i++) {
  document.write(
    "<tr><td>" + xValues[i] + "</td><td>" + operators[i] + "</td><td>" +
    yValues[i] + "</td><td>" + results[i] + "</td></tr>"
  );
}

document.write("</table>");

// ---- Summary table ----
var min, max, avg, total;

if (validResults.length > 0) {
  min = Math.min.apply(null, validResults);
  max = Math.max.apply(null, validResults);
  total = validResults.reduce(function (sum, val) {
    return sum + val;
  }, 0);
  avg = total / validResults.length;
} else {
  min = "N/A";
  max = "N/A";
  avg = "N/A";
  total = "N/A";
}

document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write(
  "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>"
);
document.write("</table>");

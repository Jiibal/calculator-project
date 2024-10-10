
function calculator(){

    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let operator = document.getElementById("operator").value

    if (input1 === "" || input2 === "") {
        alert("please enter both numbers.");
        return;
    }
  
    let result;

    switch (operator) {
        case "add":
          result = Number(input1) + Number(input2);
          break;
      }
    switch (operator) {
        case "subtract":
            result = Number(input1) - Number(input2);
            break;
    }
    switch (operator) {
        case "multiply":
            result = Number(input1) * Number(input2);
            break;
    }
    switch (operator) {
        case "divide":
            result = Number(input1) / Number(input2);
            break;
    }

    switch (operator) {
        case "raise":
            result = Number(input1) ^ Number(input2);
            break;
    }

    let resultTag = document.getElementById("result");
    resultTag.innerHTML = `Result: ${result}`;
}

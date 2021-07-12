const getHistory = function () {
  return document.getElementById("history-value").innerText;
};

// alert(getHistory());

const printHistory = function (num) {
  return (document.getElementById("history-value").innerText = num);
};

// printHistory("896+65");

const getOutput = function () {
  return document.getElementById("output-value").innerText;
};

const printOutput = function (num) {
  if (num == "") {
    return (document.getElementById("output-value").innerText = num);
  } else {
    return (document.getElementById("output-value").innerText =
      getFormattedNumber(num));
  }
};

// alert(printOutput("25 + 6"));

const getFormattedNumber = function (num) {
  if (num == "-") return "";
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
};

// printOutput("");

const reverseNumberFormat = function (num) {
  return Number(num.replace(/,/g, ""));
};
// alert(reverseNumberFormat("999,999,8899"));

let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id === "clear") {
      // alert("fehbfjd");
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      var history = getHistory();
      if (output === "" && history != "") {
        if (isNaN(history[history.lenth - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        // printHistory(history);
        if (this.id === "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    console.log(output);
    if (output != NaN) {
      output += this.id;
      printOutput(output);
    }
    // else {
    //   output = this.id;
    //   printOutput(output);
    // }
  });
}

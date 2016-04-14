var btnNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."],
  btnFunc = ["ac", "ce", "percent",
    "equals", "divide", "times", "minus", "plus"
  ],
  operators = ["+", "-", "*", "/"],
  displayValues = [],
  currentDisplay = "",
  current,
  value,
  answer,
  num,
  screenDisplay = "";

function display(val) {
  screenDisplay = screenDisplay + val;
  if (screenDisplay.length > 14) {
    screenDisplay = screenDisplay.substr(0, 13);
  }
  $('.display').text(screenDisplay);
}

function pushCurrentDisplay() {
  displayValues.push($('.display').text());
  clearDisplay();
}

function getCurrentDisplay() {
  return $('.display').text();
}

function clearDisplay() {
  screenDisplay = "";
  display("");
}

function allClear() {
  screenDisplay = "";
  display("");
  displayValues = [];
}

function examineValue(val) {
  if (operators.indexOf($('.display').text()) !== -1) {
    pushCurrentDisplay();
  }
  if (btnNum.indexOf(val) !== -1) {
    display(val);
  }
  switch (val) {
    case "plus":
      pushCurrentDisplay();
      display("+");
      break;
    case "minus":
      pushCurrentDisplay();
      display("-")
      break;
    case "times":
      pushCurrentDisplay();
      display("*");
      break;
    case "divide":
      pushCurrentDisplay();
      display("/");
      break;
    case "percent":
      current = getCurrentDisplay();
      clearDisplay();
      display(current/100);
      break;
    case "equals":
      pushCurrentDisplay();
      answer = displayValues.join("");
      answer = eval(answer);
      clearDisplay();
      display(answer);
      displayValues = [];
      break;
    case "ac":
      allClear();
      break;
    case "ce":
      clearDisplay();
      break;
  }
}

$('.calc-btn').on('click', function() {
  value = $(this).data('value');
  examineValue(value);
})
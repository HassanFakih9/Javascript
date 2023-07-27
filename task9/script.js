function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 == 0) console.log('Division by zero is undefined')
    else return num1 / num2;
}
function mycalculator(operation, num1, num2) {
    switch (operation) {
        case "add": console.log(add(num1, num2));
            break;
        case "subtract": console.log(subtract(num1, num2));
            break;
        case "multiply": console.log(multiply(num1, num2));
            break;
        case "divide": console.log(divide(num1, num2));
            break;
        default: console.log('undefined operation');
        break;
    }
}
mycalculator('add',6,3);
mycalculator('subtract',6,3);
mycalculator('multiply',6,3);
mycalculator('divide',6,3);
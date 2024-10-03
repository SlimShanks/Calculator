const zero = document.querySelector('.zero');
const ac = document.querySelector('.ac');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const divi = document.querySelector('.divi');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mult = document.querySelector('.mult');
const dis = document.querySelector('.display')
const equal = document.querySelector('.equal');

let num = "";
let operand = "";
let operator = "";


one.addEventListener('click', () => dis.textContent = num += '1');
two.addEventListener('click', () => dis.textContent = num += '2');
three.addEventListener('click', () => dis.textContent = num += '3');
four.addEventListener('click', () => dis.textContent = num += '4');
five.addEventListener('click', () => dis.textContent = num += '5');
six.addEventListener('click', () => dis.textContent = num += '6');
seven.addEventListener('click', () => dis.textContent = num += '7');
eight.addEventListener('click', () => dis.textContent = num += '8');
nine.addEventListener('click', () => dis.textContent = num += '9');
zero.addEventListener('click', () => dis.textContent = num += '0');
ac.addEventListener('click', () => dis.textContent = num ='');

plus.addEventListener('click',() => (operand = num, operator = "+", num = ""));
minus.addEventListener('click',() => (operand = num, operator = "-", num = ""));
mult.addEventListener('click', () => (operand = num, operator = "*", num =""));
divi.addEventListener('click', () => (operand = num, operator = "/", num = ""));

equal.addEventListener('click', () => {
    let result;
    num = parseFloat(num);

    if (operator === "+") {
        num = parseFloat(operand) + num;
    } else if (operator === "-") {
        result = parseFloat(operand) - num;
    } else if (operator === "*") {
        num = parseFloat(operand) * num;
    } else if (operator === "/") {
        if (num !== 0) {
            num = parseFloat(operand) / num;
        } else {
            dis.textContent = "Error: Division by zero"; 
            return;
        }
    }
    dis.textContent = num;
    operator = ""; 
    operand = "";
});










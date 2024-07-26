const number1 = document.getElementById(num1);
const number2 = document.getElementById(num2);

const p1 = document.getElementById("result1");
const p2 = document.getElementById("result2");
const p3 = document.getElementById("result3");
const p4 = document.getElementById("result4");

function add() {
    const result = Number(number1.value) + Number(number2.value);
    p1.innerHTML = result;
}
function add1() {
    const result = Number(number1.value) - Number(number2.value);
    p1.innerHTML = result;
}
function add2() {
    const result = Number(number1.value) * Number(number2.value);
    p1.innerHTML = result;
}
function add3() {
    const result = Number(number1.value) / Number(number2.value);
    p1.innerHTML = result;
}
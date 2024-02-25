// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// };
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var p = document.querySelector('p');
var add = function (num1, num2) { return num1 + num2; };
var resetForm = function () {
    input1.value = "";
    input2.value = "";
};
var outputResult = function () { return p.textContent = "Result: ".concat(add(Number(input1.value), Number(input2.value))); };
var clickHandle = function () {
    outputResult();
    resetForm();
};
button.addEventListener('click', clickHandle);

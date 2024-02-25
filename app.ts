// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;


// function add(num1: number, num2: number) {
//   return num1 + num2;
// };

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });



const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
const p = document.querySelector('p')! as HTMLParagraphElement;

const add = (num1: number, num2: number) => num1 + num2;
const resetForm = () => {
  input1.value = "";
  input2.value = "";
};
const outputResult = () => p.textContent = `Result: ${add(Number(input1.value), Number(input2.value))}`;

const clickHandle = () => {  
  outputResult();
  resetForm();
};

button.addEventListener('click', clickHandle);


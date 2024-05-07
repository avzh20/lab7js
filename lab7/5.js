let randomNum = Math.floor(Math.random() * (10 * N)) + 1;
alert("Случайное число от 1 до " + 10*N + ": " + randomNum);
document.write("Случайное число от 1 до " + 10*N + ": " + randomNum + "<br>");

let arr = [];
for(let i = 0; i < N+5; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
alert("Массив случайных чисел: " + arr.join(", "));
document.write("Массив случайных чисел: " + arr.join(", "));

let N = prompt("Ваш вариант N: ");
let st = Math.pow(N, (21-N));
alert("N в степени (21-N): " + st);
document.write("N в степени (21-N): " + st + "<br>");

a = prompt("Введите число a: ");
alert("Квадратный корень из a: " + Math.sqrt(a));
document.write("Квадратный корень из a: " + Math.sqrt(a) + "<br>");

let array = prompt("Введите элементы массива через запятую: ").split(',').map(Number);
let sum = 0;
for(let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
}
alert("Квадратный корень из суммы кубов элементов массива: " + Math.sqrt(sum));
document.write("Квадратный корень из суммы кубов элементов массива: " + Math.sqrt(sum));
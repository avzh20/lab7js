array = prompt("Введите элементы массива через запятую: ").split(',').map(Number);
let min = Math.min(...array);
let max = Math.max(...array);
alert("Минимальное число в массиве: " + min + ", Максимальное число в массиве: " + max);
document.write("Минимальное число в массиве: " + min + ", Максимальное число в массиве: " + max);
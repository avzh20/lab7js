let result = Math.sqrt(111 * N);
alert("Квадратный корень из 111*N, округленный до целых: " + Math.round(result));
document.write("Квадратный корень из 111*N, округленный до целых: " + Math.round(result) + "<br>");
alert("Квадратный корень из 111*N, округленный до десятых: " + Math.round(result * 10) / 10);
document.write("Квадратный корень из 111*N, округленный до десятых: " + Math.round(result * 10) / 10 + "<br>");
alert("Квадратный корень из 111*N, округленный до сотых: " + Math.round(result * 100) / 100);
document.write("Квадратный корень из 111*N, округленный до сотых: " + Math.round(result * 100) / 100 + "<br>");

a = prompt("Введите число a: ");
let sqrtA = Math.sqrt(a);
let roundingResult = {
    'floor': Math.floor(sqrtA),
    'ceil': Math.ceil(sqrtA)
};
alert("Квадратный корень из a, округленный в большую и меньшую стороны: " + JSON.stringify(roundingResult));
document.write("Квадратный корень из a, округленный в большую и меньшую стороны: " + JSON.stringify(roundingResult));

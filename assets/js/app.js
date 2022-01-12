let output = document.getElementById("output");
let a = +prompt("Выберите задание (1-3)", );
switch (a) {
    case 1:
        {
            let input = prompt("1.Введите число строк (только цифры)", );
            output.innerHTML = "треугольник" + "<br>";
            for (i = 0; i <= input; i++) {
                output.innerHTML += "<br>" + "&nbsp ";
                for (j = 0; j < input - i; j++) {
                    output.innerHTML += "";
                }
                for (j = 2 - i; j <= 1; j++) {

                    output.innerHTML += "&nbsp" + " * ";
                }
            }
            break;
        };
    case 2:
        {
            let input = prompt("3.Введите число строк (только цифры)", );
            output.innerHTML = "квадрат" + "<br>" + "<br>";
            for (i = 1; i <= input; i++) {
                for (j = 1; j <= input; j++) {
                    if (i == 1 || i == input) output.innerHTML += "&nbsp" + " * ";
                    else output.innerHTML += "&nbsp" + " * ";
                };
                output.innerHTML += "&nbsp" + " <br> ";
            }
            break;
        };
    case 3:
        {
            let input = prompt("2.Введите число строк (только цифры)", );
            output.innerHTML = "треугольник" + "<br>";
            for (i = input; i > 0; i--) {
                output.innerHTML += " <br> ";
                for (j = 0; j < 1 - i; j++) {
                    output.innerHTML += "&nbsp";
                }
                for (j = 1 - i; j <= 0; j++) {

                    output.innerHTML += "&nbsp" + "*" + "&nbsp";
                }
            }
            break;
        };
    default:
        if (a == "" || a == null) {
            alert("Ошибка");
        } else {
            alert("Выберите еще раз задание");
        }
        break;
}
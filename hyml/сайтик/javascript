let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
alert(`Привет, ${name}! Тебе ${age} лет.`);
console.log(`Привет, ${name}! Тебе ${age} лет.`);


if (age >= 18) {
    alert("Вы совершеннолетний.");
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний.");
    console.log("Вы несовершеннолетний.");
}


let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Угадайте число от 1 до 10:");
if (Number(userGuess) === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (userGuess < 5) {
        alert("Ваше число меньше 5. Попробуйте еще раз!");
    } else {
        alert("Ваше число больше 5. Попробуйте еще раз!");
    }
    console.log(`Вы не угадали. Загаданное число: ${randomNumber}.`);
}


let correctPassword = "12345";
let userPassword = prompt("Введите пароль:");
if (userPassword === correctPassword && userPassword !== "") {
    alert("Доступ разрешен.");
    console.log("Доступ разрешен.");
} else if (userPassword === "") {
    alert("Пароль не может быть пустым.");
    console.log("Пароль не может быть пустым.");
} else {
    alert("Доступ запрещен.");
    console.log("Доступ запрещен.");
}


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");
let result;

if (operator === "+") {
    result = num1 + num2;
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
} else if (operator === "-") {
    result = num1 - num2;
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
} else if (operator === "*") {
    result = num1 * num2;
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert(`Результат: ${result}`);
        console.log(`Результат: ${result}`);
    } else {
        alert("Деление на ноль невозможно.");
        console.log("Деление на ноль невозможно.");
    }
} else {
    alert("Неверный оператор.");
    console.log("Неверный оператор.");
}

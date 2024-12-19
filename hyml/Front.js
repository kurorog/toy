// 1. Создаём переменные для имени и возраста
let name = "Эркин";
let age = 24;

// 2. Условие для проверки возраста
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// 1. Цикл for, выводящий числа от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Цикл while, выводящий числа от 10 до 1
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
    }

    // Part 2: Object Handling
    const formData = {
        name: "",
        email: "",
        phone: "",
        date: "",
        comment: "",
        printData: function() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    function submitForm(event) {
        event.preventDefault();
        const form = event.target;

        formData.name = form.name.value;
        formData.email = form.email.value;
        formData.phone = form.phone.value;
        formData.date = form.date.value;
        formData.comment = form.comment.value;

        // Validations
        if (!formData.name || !formData.email || !formData.comment) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
        if (!/^\d+$/.test(formData.phone)) {
            alert("Телефон должен содержать только цифры.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Введите корректный e-mail.");
            return;
        }

        formData.printData();
    }

    // Part 3: Form Handler
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", submitForm);
    }
});

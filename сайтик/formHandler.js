document.addEventListener("DOMContentLoaded", function() {
    // Part 1: DOM Manipulation
    document.querySelector("h1").innerText = "Добро пожаловать на наш сайт!";
    document.querySelector("h2").style.color = "red";
    document.querySelector("p").innerText = "Это новый текст параграфа.";
    const video = document.querySelector("video");
    if (video) {
        video.style.display = "none";
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
        event.preventDefault(); // Prevent default form submission

        // Collect data from the form
        formData.name = document.querySelector("#name").value;
        formData.email = document.querySelector("#email").value;
        formData.phone = document.querySelector("#phone").value;
        formData.date = document.querySelector("#date").value;
        formData.comment = document.querySelector("#comment").value;

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
            alert("Пожалуйста, введите корректный e-mail.");
            return;
        }

        // Print collected data
        formData.printData();
    }

    // Part 3: Form Handler
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", submitForm);
    }
});

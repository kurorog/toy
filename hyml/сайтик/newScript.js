document.addEventListener("DOMContentLoaded", function() {
    // H1 Animation
    const h1 = document.querySelector("h1");
    if (h1) {
        h1.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)'; // Increase size
            this.style.transition = 'transform 0.3s'; // Smooth transition
        });

        h1.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Return to original size
        });
    }

    // Paragraph Animation
    const paragraph = document.querySelector("p");
    if (paragraph) {
        paragraph.addEventListener('click', function() {
            this.style.transition = 'background-color 0.5s'; // Smooth transition
            this.style.backgroundColor = 'lightblue'; // Change background color
        });
    }

    // Student Photo Events
    const studentPhoto = document.querySelector("img[alt='Profile Picture']");
    if (studentPhoto) {
        // Mouseover to increase size
        studentPhoto.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)'; // Increase size
            this.style.transition = 'transform 0.3s'; // Smooth transition
        });

        // Mouseout to return to original size
        studentPhoto.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Return to original size
        });

        // Click to replace photo
        studentPhoto.addEventListener('click', function() {
            this.src = 'i.jpg'; // Replace with favorite teacher's photo
            this.alt = 'Фотография любимого преподавателя'; // Update alt text
        });

        // Double click to show alert
        studentPhoto.addEventListener('dblclick', function() {
            alert('Не налегай, у меня не так много любимых преподавателей');
        });
    }
});

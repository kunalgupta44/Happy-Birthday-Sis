// script.js

const message = "Happy Birthday! I hope your day is as amazing as your smile and as bright as your future. You bring so much joy and positivity wherever you go. May this year bring you endless happiness, success, and all the deserve. I hope you feel cherished today. Wishing you a birthday filled with laughter, love, and unforgettable moments. You are truly special, and I hope you know how much you are appreciated. I hope your special day is filled with all the joy and laughter you bring to the world. You light up my life, and I can't wait for all the new adventures ahead. Forever and always, my dear Sis";
const speed = 40; // Typing speed in milliseconds

const messageElement = document.getElementById('bdayMessage');
const nextBtn = document.getElementById('nextBtn');
let i = 0;

function typeWriter() {
    if (i < message.length) {
        // Add the next character to the text content
        messageElement.innerHTML += message.charAt(i);
        i++;
        // Use setTimeout to call the function again after a delay
        setTimeout(typeWriter, speed);
    } else {
        // Typing finished, remove cursor and show button
        document.getElementById('cursor').style.display = 'none';
        nextBtn.classList.remove('d-none'); // Show the next button
        nextBtn.classList.add('animate__animated', 'animate__fadeInUp'); // Add an entrance animation
    }
}

// Start the typewriter effect when the page loads
if (messageElement) {
    typeWriter();
}
const letter = document.querySelector('.letter');
const button = document.getElementById('toggle-button');

button.addEventListener('click', () => {
    letter.classList.toggle('open');
});

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2-5s
    heartsContainer.appendChild(heart);

    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 1 second
setInterval(createHeart, 1000);

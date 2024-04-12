
const toggleBtn = document.getElementById('toggle-btn');
const text = document.getElementById('text');

let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        text.textContent = 'sombre';
    } else {
        document.body.style.backgroundColor = '#18191a';
        document.body.style.color = '#d3d5da';
        text.textContent = 'normal';
    }
});



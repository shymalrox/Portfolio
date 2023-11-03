//function for dark/light mode
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    body.classList.toggle('light-mode');

    const modeMessage = body.classList.contains('light-mode') ?
    'OFF'
    : "ON"

modeStatus.innerText = "Dark Mode " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);
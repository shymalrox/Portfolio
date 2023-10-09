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


//function for age calculator
const form = document.querySelector('form');
const birthdateInput = document.querySelector('#birthdate');
const ageOutput = document.querySelector('#age');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const birthdateString = birthdateInput.value;

  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(birthdateString)) {
    alert('Please use MM/DD/YYYY format.');
    return;
  }

  const birthdate = new Date(birthdateString);

  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  ageOutput.textContent = `You are ${age} years old.`;
});

form.addEventListener('reset', function() {
  ageOutput.textContent = null;
})
//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('keyup', (event) => {
    const key = event.key;
    const nextInput = codeInputs[index + 1];
    const prevInput = codeInputs[index - 1];

    // Allow only numbers
    if (key !== 'Backspace' && key !== 'Delete' && (!/^\d$/.test(key))) {
      event.preventDefault();
      return;
    }

    if (key === 'Backspace') {
      if (prevInput) {
        prevInput.focus();
        prevInput.value = '';
      }
    } else if (nextInput) {
      nextInput.focus();
    }
  });
});
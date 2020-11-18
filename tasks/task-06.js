// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInputRef = document.querySelector('input#validation-input');
// console.dir(validationInputRef);

// validationInputRef.style.border = '3px solid #bdbdbd';


validationInputRef.addEventListener('blur', e => {
    if (Number(e.target.value.length) === Number(validationInputRef.dataset.length)) {
        // validationInputRef.style.borderColor = '#4caf50';
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
} else {
    // validationInputRef.style.borderColor = '#f44336';
        validationInputRef.classList.add('invalid');
        validationInputRef.classList.remove('valid');
}
    // console.log('Hello');
});

